"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DuergarCaveGuard extends Card {
  constructor(game) {
    super(game, "Duergar Cave-Guard", "Eventide", "EVE");
  }
}

module.exports = DuergarCaveGuard;
