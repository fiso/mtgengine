"use strict";
const Constants = require ("../../../Constants");
const ActiveVolcanoBase = require("../setME3/ActiveVolcano");

class ActiveVolcano extends ActiveVolcanoBase {
  constructor (game) {
    super(game, "Active Volcano", "Legends", "LEG");
  }
}

module.exports = ActiveVolcano;
