"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CowedbyWisdom extends Card {
  constructor(game) {
    super(game, "Cowed by Wisdom", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = CowedbyWisdom;
