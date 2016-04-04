"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulNova extends Card {
  constructor(game) {
    super(game, "Soul Nova", "Mirrodin", "MRD");
  }
}

module.exports = SoulNova;
