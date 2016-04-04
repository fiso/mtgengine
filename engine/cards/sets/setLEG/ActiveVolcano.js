"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ActiveVolcanoBase = require("../setCHR/ActiveVolcano.js");

class ActiveVolcano extends ActiveVolcanoBase {
  constructor(game) {
    super(game, "Active Volcano", "Legends", "LEG");
  }
}

module.exports = ActiveVolcano;
