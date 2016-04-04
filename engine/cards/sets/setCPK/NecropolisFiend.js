"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecropolisFiend extends Card {
  constructor(game) {
    super(game, "Necropolis Fiend", "Clash Pack", "CPK");
  }
}

module.exports = NecropolisFiend;
