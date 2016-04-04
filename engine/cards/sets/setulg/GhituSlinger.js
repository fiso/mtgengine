"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhituSlinger extends Card {
  constructor(game) {
    super(game, "Ghitu Slinger", "Urza's Legacy", "ULG");
  }
}

module.exports = GhituSlinger;
