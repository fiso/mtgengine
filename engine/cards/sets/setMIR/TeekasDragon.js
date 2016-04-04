"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeekasDragon extends Card {
  constructor(game) {
    super(game, "Teeka's Dragon", "Mirage", "MIR");
  }
}

module.exports = TeekasDragon;
