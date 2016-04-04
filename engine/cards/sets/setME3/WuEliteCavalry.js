"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WuEliteCavalry extends Card {
  constructor(game) {
    super(game, "Wu Elite Cavalry", "Masters Edition III", "ME3");
  }
}

module.exports = WuEliteCavalry;
