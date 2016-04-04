"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildGriffin extends Card {
  constructor(game) {
    super(game, "Wild Griffin", "Magic 2011", "M11");
  }
}

module.exports = WildGriffin;
