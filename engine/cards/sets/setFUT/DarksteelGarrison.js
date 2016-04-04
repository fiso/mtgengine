"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarksteelGarrison extends Card {
  constructor(game) {
    super(game, "Darksteel Garrison", "Future Sight", "FUT");
  }
}

module.exports = DarksteelGarrison;
