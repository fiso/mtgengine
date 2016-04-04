"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaringThief extends Card {
  constructor(game) {
    super(game, "Daring Thief", "Journey into Nyx", "JOU");
  }
}

module.exports = DaringThief;
