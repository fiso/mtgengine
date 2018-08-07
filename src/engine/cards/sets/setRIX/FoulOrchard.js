"use strict";
const Constants = require ("../../../Constants");
const FoulOrchardBase = require("../setM19/FoulOrchard");

class FoulOrchard extends FoulOrchardBase {
  constructor (game) {
    super(game, "Foul Orchard", "Rivals of Ixalan", "RIX");
  }
}

module.exports = FoulOrchard;
