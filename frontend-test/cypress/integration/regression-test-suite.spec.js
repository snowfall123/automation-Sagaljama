/// <reference types="cypress" />

import * as targets from '../targets/targets'
import * as indexFunctions from '../helpers/indexPage'
import * as clientPageFunctions from '../helpers/clientsPage'
import * as dashboardPageFunctions from '../helpers/dashboardPage'
import * as logOutButtonFunctions from '../helpers/logOutPage'
import * as roomsPageFunctions from '../helpers/roomsPage'

// test suite
describe('test suite', function(){

    // Loggar in vid test
    this.beforeEach(() => {
       cy.visit(targets.base_url) 
        indexFunctions.checkTitleOfIndexPage(cy)
        indexFunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    })

   this.afterEach(()=>{
        logOutButtonFunctions.logOut(cy)
    })

        it ('Skapa Klient', function(){
            dashboardPageFunctions.enterClientsFromDashboard(cy)
            clientPageFunctions.checkTitleOfClientPage(cy)
            clientPageFunctions.createClient(cy, targets.fakeName, targets.fakeEmail, targets.fakeTelephone, 'Clients') 
        })
    
        it ('Radera Klient', function(){
            dashboardPageFunctions.enterClientsFromDashboard(cy)
            clientPageFunctions.checkTitleOfClientPage(cy)
            clientPageFunctions.deleteThirdClient(cy)
        })

        
        it ('Misslycka skapa rum', function(){
            dashboardPageFunctions.enterRoomsFromDashboard(cy)
            roomsPageFunctions.checkTitleOfRoomsPage(cy)
            roomsPageFunctions.failToCreateRoom(cy)
        })
        
        it ('Skapa och radera rum', function(){
            dashboardPageFunctions.enterRoomsFromDashboard(cy)
            roomsPageFunctions.checkTitleOfRoomsPage(cy)
            roomsPageFunctions.createRoom(cy, targets.category, targets.roomNumber, targets.roomFloor, targets.roomPrice, targets.features, 'Rooms')
            roomsPageFunctions.deleteRoom(cy)
        })

})