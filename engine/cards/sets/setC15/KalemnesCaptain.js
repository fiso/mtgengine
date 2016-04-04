"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KalemnesCaptain extends Card {
  constructor(game) {
    super(game, "Kalemne's Captain", "Commander 2015", "C15");
  }
}

module.exports = KalemnesCaptain;
