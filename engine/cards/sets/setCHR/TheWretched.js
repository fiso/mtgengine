"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheWretched extends Card {
  constructor(game) {
    super(game, "The Wretched", "Chronicles", "CHR");
  }
}

module.exports = TheWretched;
