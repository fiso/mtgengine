"use strict";
const Constants = require ("../../../Constants");
const EvacuationBase = require("../setDPA/Evacuation");

class Evacuation extends EvacuationBase {
  constructor(game) {
    super(game, "Evacuation", "Seventh Edition", "7ED");
  }
}

module.exports = Evacuation;
