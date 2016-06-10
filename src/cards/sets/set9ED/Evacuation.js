"use strict";
const Constants = require ("../../../Constants");
const EvacuationBase = require("../setDPA/Evacuation");

class Evacuation extends EvacuationBase {
  constructor (game) {
    super(game, "Evacuation", "Ninth Edition", "9ED");
  }
}

module.exports = Evacuation;
