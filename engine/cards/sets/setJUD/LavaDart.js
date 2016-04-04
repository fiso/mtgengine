"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavaDart extends Card {
  constructor(game) {
    super(game, "Lava Dart", "Judgment", "JUD");
  }
}

module.exports = LavaDart;
