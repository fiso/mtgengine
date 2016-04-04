"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AmuletofQuoz extends Card {
  constructor(game) {
    super(game, "Amulet of Quoz", "Ice Age", "ICE");
  }
}

module.exports = AmuletofQuoz;
