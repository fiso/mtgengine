"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Unforge extends Card {
  constructor(game) {
    super(game, "Unforge", "Darksteel", "DST");
  }
}

module.exports = Unforge;
