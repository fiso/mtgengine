"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RenegadeDoppelganger extends Card {
  constructor(game) {
    super(game, "Renegade Doppelganger", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RenegadeDoppelganger;
