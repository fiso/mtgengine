"use strict";
const Constants = require ("../../../Constants");
const DwynenGiltLeafDaenBase = require("../setDDU/DwynenGiltLeafDaen");

class DwynenGiltLeafDaen extends DwynenGiltLeafDaenBase {
  constructor (game) {
    super(game, "Dwynen, Gilt-Leaf Daen", "Magic Online Promos", "PRM");
  }
}

module.exports = DwynenGiltLeafDaen;
