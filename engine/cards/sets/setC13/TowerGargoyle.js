"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TowerGargoyle extends Card {
  constructor(game) {
    super(game, "Tower Gargoyle", "Commander 2013 Edition", "C13");
  }
}

module.exports = TowerGargoyle;
