"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HideousLaughter extends Card {
  constructor(game) {
    super(game, "Hideous Laughter", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HideousLaughter;
