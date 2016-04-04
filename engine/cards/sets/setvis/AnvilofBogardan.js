"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AnvilofBogardan extends Card {
  constructor(game) {
    super(game, "Anvil of Bogardan", "Visions", "VIS");
  }
}

module.exports = AnvilofBogardan;
