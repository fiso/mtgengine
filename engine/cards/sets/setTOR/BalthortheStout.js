"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalthortheStout extends Card {
  constructor(game) {
    super(game, "Balthor the Stout", "Torment", "TOR");
  }
}

module.exports = BalthortheStout;
