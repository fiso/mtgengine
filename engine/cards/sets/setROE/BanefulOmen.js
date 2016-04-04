"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BanefulOmen extends Card {
  constructor(game) {
    super(game, "Baneful Omen", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BanefulOmen;
