"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkFavor extends Card {
  constructor(game) {
    super(game, "Dark Favor", "Magic 2012", "M12");
  }
}

module.exports = DarkFavor;
