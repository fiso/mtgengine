"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenShrine extends Card {
  constructor(game) {
    super(game, "Dwarven Shrine", "Odyssey", "ODY");
  }
}

module.exports = DwarvenShrine;
