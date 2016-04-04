"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshenRider extends Card {
  constructor(game) {
    super(game, "Ashen Rider", "Theros", "THS");
  }
}

module.exports = AshenRider;
