"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeaMonster extends Card {
  constructor(game) {
    super(game, "Sea Monster", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SeaMonster;
