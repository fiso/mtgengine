"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KalastriaHighborn extends Card {
  constructor(game) {
    super(game, "Kalastria Highborn", "Worldwake", "WWK");
  }
}

module.exports = KalastriaHighborn;
