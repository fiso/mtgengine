"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KitesailApprentice extends Card {
  constructor(game) {
    super(game, "Kitesail Apprentice", "Worldwake", "WWK");
  }
}

module.exports = KitesailApprentice;
