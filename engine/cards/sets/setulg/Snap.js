"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Snap extends Card {
  constructor(game) {
    super(game, "Snap", "Urza's Legacy", "ULG");
  }
}

module.exports = Snap;
