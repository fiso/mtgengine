"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NefariousLich extends Card {
  constructor(game) {
    super(game, "Nefarious Lich", "Odyssey", "ODY");
  }
}

module.exports = NefariousLich;
