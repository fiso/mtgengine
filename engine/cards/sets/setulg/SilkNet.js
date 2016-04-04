"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilkNet extends Card {
  constructor(game) {
    super(game, "Silk Net", "Urza's Legacy", "ULG");
  }
}

module.exports = SilkNet;
