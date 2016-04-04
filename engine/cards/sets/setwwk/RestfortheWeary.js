"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RestfortheWeary extends Card {
  constructor(game) {
    super(game, "Rest for the Weary", "Worldwake", "WWK");
  }
}

module.exports = RestfortheWeary;
