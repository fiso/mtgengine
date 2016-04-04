"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticPenitent extends Card {
  constructor(game) {
    super(game, "Mystic Penitent", "Odyssey", "ODY");
  }
}

module.exports = MysticPenitent;
