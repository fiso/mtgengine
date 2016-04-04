"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StromkirkCaptain extends Card {
  constructor(game) {
    super(game, "Stromkirk Captain", "Dark Ascension", "DKA");
  }
}

module.exports = StromkirkCaptain;
