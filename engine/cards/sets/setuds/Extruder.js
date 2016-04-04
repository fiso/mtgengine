"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Extruder extends Card {
  constructor(game) {
    super(game, "Extruder", "Urza's Destiny", "UDS");
  }
}

module.exports = Extruder;
