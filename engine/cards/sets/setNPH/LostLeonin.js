"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LostLeonin extends Card {
  constructor(game) {
    super(game, "Lost Leonin", "New Phyrexia", "NPH");
  }
}

module.exports = LostLeonin;
