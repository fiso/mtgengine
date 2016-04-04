"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SokenzanRenegade extends Card {
  constructor(game) {
    super(game, "Sokenzan Renegade", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SokenzanRenegade;
