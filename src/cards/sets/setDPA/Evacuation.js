"use strict";
const Constants = require ("../../../Constants");
const EvacuationBase = require("../setC16/Evacuation");

class Evacuation extends EvacuationBase {
  constructor (game) {
    super(game, "Evacuation", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Evacuation;
