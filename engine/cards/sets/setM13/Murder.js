"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Murder extends Card {
  constructor(game) {
    super(game, "Murder", "Magic 2013", "M13");
  }
}

module.exports = Murder;
