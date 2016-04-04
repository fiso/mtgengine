"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Forget extends Card {
  constructor(game) {
    super(game, "Forget", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Forget;
