"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AmuletofVigor extends Card {
  constructor(game) {
    super(game, "Amulet of Vigor", "Worldwake", "WWK");
  }
}

module.exports = AmuletofVigor;
