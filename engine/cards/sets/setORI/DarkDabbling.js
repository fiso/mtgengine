"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkDabbling extends Card {
  constructor(game) {
    super(game, "Dark Dabbling", "Magic Origins", "ORI");
  }
}

module.exports = DarkDabbling;
