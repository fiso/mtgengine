"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathmistRaptor extends Card {
  constructor(game) {
    super(game, "Deathmist Raptor", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DeathmistRaptor;
