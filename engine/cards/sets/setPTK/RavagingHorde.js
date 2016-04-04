"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RavagingHorde extends Card {
  constructor(game) {
    super(game, "Ravaging Horde", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RavagingHorde;
