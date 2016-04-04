"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwordoftheMeek extends Card {
  constructor(game) {
    super(game, "Sword of the Meek", "Future Sight", "FUT");
  }
}

module.exports = SwordoftheMeek;
