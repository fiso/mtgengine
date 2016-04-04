"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rally extends Card {
  constructor(game) {
    super(game, "Rally", "Ice Age", "ICE");
  }
}

module.exports = Rally;
