import { makeAutoObservable } from "mobx"
import ComputerService from '../services/ComputerService';
import { ComputerStep } from '../models/ComputerStep';

export default class Store {
    newGame: boolean = true
    winner: string = ''
    humanPlayX: boolean = true
    arrTable: string[] = ['','', '', '', '', '', '', '', '' ]
    stepHuman: boolean = true    

    constructor() {
        makeAutoObservable(this)
    }

    setNewGame(bool: boolean) {
        this.newGame = bool
    }

    setWinner(str: string) {
        this.winner = str
    }

    setHumanPlayX(bool: boolean) {
        this.humanPlayX = bool
    }

    setArrTable(value: string, index: number) {
        this.arrTable[index] = value
    }

    async setTableComputer(value: ComputerStep) {
        try {
            const response = await ComputerService.stepComputer(value)
            const resp: string[] = response.data.board
            const newItem: [string, number] = this.arrTable.reduce((count: any, elem: string, index: number) => {
                if (elem !== resp[index])  {
                    count = [resp[index], index]
                    return count
                } else {
                    return count
                } 
            }, [])
            const [valueArr, index] = newItem
            this.setArrTable(valueArr, index)
            
        } catch(e: any) {
            console.log(e.response?.data?.message)
        }
    }

    setStepHuman(bool: boolean) {
        this.stepHuman = bool
    }
}