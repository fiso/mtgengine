"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DingusEgg extends Card {
  constructor(game) {
    super(game, "Dingus Egg", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DingusEgg;
