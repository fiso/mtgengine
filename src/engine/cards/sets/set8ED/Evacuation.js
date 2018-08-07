"use strict";
const Constants = require ("../../../Constants");
const EvacuationBase = require("../setC16/Evacuation");

class Evacuation extends EvacuationBase {
  constructor (game) {
    super(game, "Evacuation", "Eighth Edition", "8ED");
  }
}

module.exports = Evacuation;
