"use strict";
const Constants = require ("../../../Constants");
const EvacuationBase = require("../setDPA/Evacuation");

class Evacuation extends EvacuationBase {
  constructor (game) {
    super(game, "Evacuation", "Eighth Edition", "8ED");
  }
}

module.exports = Evacuation;
