"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvariceAmulet extends Card {
  constructor(game) {
    super(game, "Avarice Amulet", "Magic 2015 Core Set", "M15");
  }
}

module.exports = AvariceAmulet;
