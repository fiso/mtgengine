"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CursedMonstrosity extends Card {
  constructor(game) {
    super(game, "Cursed Monstrosity", "Odyssey", "ODY");
  }
}

module.exports = CursedMonstrosity;
