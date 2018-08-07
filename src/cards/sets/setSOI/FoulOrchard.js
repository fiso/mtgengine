"use strict";
const Constants = require ("../../../Constants");
const FoulOrchardBase = require("../setM19/FoulOrchard");

class FoulOrchard extends FoulOrchardBase {
  constructor (game) {
    super(game, "Foul Orchard", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FoulOrchard;
