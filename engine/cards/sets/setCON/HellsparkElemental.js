"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HellsparkElemental extends Card {
  constructor(game) {
    super(game, "Hellspark Elemental", "Conflux", "CON");
  }
}

module.exports = HellsparkElemental;
