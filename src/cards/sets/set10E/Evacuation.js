"use strict";
const Constants = require ("../../../Constants");
const EvacuationBase = require("../setDPA/Evacuation");

class Evacuation extends EvacuationBase {
  constructor (game) {
    super(game, "Evacuation", "Tenth Edition", "10E");
  }
}

module.exports = Evacuation;
