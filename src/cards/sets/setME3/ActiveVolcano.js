"use strict";
const Constants = require ("../../../Constants");
const ActiveVolcanoBase = require("../setCHR/ActiveVolcano");

class ActiveVolcano extends ActiveVolcanoBase {
  constructor (game) {
    super(game, "Active Volcano", "Masters Edition III", "ME3");
  }
}

module.exports = ActiveVolcano;
