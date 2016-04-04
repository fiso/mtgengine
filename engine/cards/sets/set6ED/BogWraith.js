"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogWraith extends Card {
  constructor(game) {
    super(game, "Bog Wraith", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BogWraith;
