var express = require('express')
var globRoom = require('../controllers/GlobalRoomController')
var groupRoom = require('../controllers/GroupRoomController')

module.exports = (app) => {
    app.get('/getChatHist',globRoom.getChatHist)

    app.get('/getNumMsgs',globRoom.getNumMsgs)

    // app.post(':groupId',groupRoom.addNewGroup)
}

