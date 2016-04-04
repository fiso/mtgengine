"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Necromancy extends Card {
  constructor(game) {
    super(game, "Necromancy", "Visions", "VIS");
  }
}

module.exports = Necromancy;
