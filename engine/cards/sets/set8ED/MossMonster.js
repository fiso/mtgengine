"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MossMonster extends Card {
  constructor(game) {
    super(game, "Moss Monster", "Eighth Edition", "8ED");
  }
}

module.exports = MossMonster;
