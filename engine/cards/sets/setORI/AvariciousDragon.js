"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvariciousDragon extends Card {
  constructor(game) {
    super(game, "Avaricious Dragon", "Magic Origins", "ORI");
  }
}

module.exports = AvariciousDragon;
