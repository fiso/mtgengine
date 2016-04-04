"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticVisionary extends Card {
  constructor(game) {
    super(game, "Mystic Visionary", "Odyssey", "ODY");
  }
}

module.exports = MysticVisionary;
