"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Diminish extends Card {
  constructor(game) {
    super(game, "Diminish", "Magic 2011", "M11");
  }
}

module.exports = Diminish;
