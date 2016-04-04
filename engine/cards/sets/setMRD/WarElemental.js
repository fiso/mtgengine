"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarElemental extends Card {
  constructor(game) {
    super(game, "War Elemental", "Mirrodin", "MRD");
  }
}

module.exports = WarElemental;
