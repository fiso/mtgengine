"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KondasBanner extends Card {
  constructor(game) {
    super(game, "Konda's Banner", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KondasBanner;
