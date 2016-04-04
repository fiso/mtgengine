"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MiresToll extends Card {
  constructor(game) {
    super(game, "Mire's Toll", "Worldwake", "WWK");
  }
}

module.exports = MiresToll;
