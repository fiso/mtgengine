"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoonlitStrider extends Card {
  constructor(game) {
    super(game, "Moonlit Strider", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MoonlitStrider;
