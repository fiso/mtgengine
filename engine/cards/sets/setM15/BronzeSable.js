"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BronzeSable extends Card {
  constructor(game) {
    super(game, "Bronze Sable", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BronzeSable;
