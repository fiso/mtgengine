"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PunctureBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Puncture Blast", "Eventide", "EVE");
  }
}

module.exports = PunctureBlast;
