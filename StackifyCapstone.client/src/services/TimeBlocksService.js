import { AppState } from "../AppState"
import { Timeblock } from "../models/Timeblock"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TimeBlocksService{
    async getMyTimeBlocks(){
        const eventId = AppState.activeEvent.id
        const res = await api.get(`api/events/${eventId}/timeblocks`)
        logger.log('getting timeblocks')
        AppState.myTimeBlocks = res.data.map(timeBlock => new Timeblock(timeBlock))
        AppState.myTimeBlocks.sort((t1, t2) => (t1.position - t2.position))
    }

    async createTimeblock(timeBlockData){
        timeBlockData.position = AppState.myTimeBlocks.length
        const res = await api.post('api/timeblocks', timeBlockData)
        const activeTimeblock = AppState.myTimeBlocks.push(new Timeblock(res.data))
        AppState.activeTimeBlock = activeTimeblock
      }

      async moveTimeblock(timeblock, upOrDown){
        const ogPosition = timeblock.position
        let ogIndex = AppState.myTimeBlocks.findIndex(block=> block.id == timeblock.id)
        let newIndex = ogIndex
        if(upOrDown == "up") newIndex--
        else newIndex++
        let newTimeblock = AppState.myTimeBlocks[newIndex]
        timeblock.position = newTimeblock.position
        newTimeblock.position = ogPosition
        AppState.myTimeBlocks.splice(ogIndex, 1, newTimeblock)
        AppState.myTimeBlocks.splice(newIndex, 1, timeblock)
        await api.put(`api/timeblocks/${timeblock.id}`, timeblock)
        await api.put(`api/timeblocks/${newTimeblock.id}`, newTimeblock)
      }

      async saveNotes(timeblockId, timeblockData){
        const res = await api.put(`api/timeblocks/${timeblockId}`, timeblockData)
        logger.log('this is the put request', res.data)
        AppState.activeTimeBlock.notes = res.data.notes
      }

      setActiveTimeblock(timeblockId){
        const activeTimeBlock = AppState.myTimeBlocks.find(timeblock => timeblock.id == timeblockId)
        AppState.activeTimeBlock = activeTimeBlock
      }

      prevTimeblock(){
        AppState.activeTimeBlock = AppState.myTimeBlocks[AppState.activeTimeBlock.position-1]
      }

      nextTimeblock(){
        AppState.activeTimeBlock = AppState.myTimeBlocks[AppState.activeTimeBlock.position+1]
      }

      toggleLock(){
        AppState.activeTimeBlock.locked = !AppState.activeTimeBlock.locked
        logger.log('toggle lock', AppState.activeTimeBlock.locked)
      }
}

export const timeBlocksService = new TimeBlocksService()