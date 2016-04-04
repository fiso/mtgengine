"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DivineFavor extends Card {
  constructor(game) {
    super(game, "Divine Favor", "Magic 2012", "M12");
  }
}

module.exports = DivineFavor;
