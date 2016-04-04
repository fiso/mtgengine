"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanicRambler extends Card {
  constructor(game) {
    super(game, "Volcanic Rambler", "Magic Origins", "ORI");
  }
}

module.exports = VolcanicRambler;
