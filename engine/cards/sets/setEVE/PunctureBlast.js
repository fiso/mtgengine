"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PunctureBlast extends Card {
  constructor(game) {
    super(game, "Puncture Blast", "Eventide", "EVE");
  }
}

module.exports = PunctureBlast;
