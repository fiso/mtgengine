"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LymphSliver extends Card {
  constructor(game) {
    super(game, "Lymph Sliver", "Future Sight", "FUT");
  }
}

module.exports = LymphSliver;
