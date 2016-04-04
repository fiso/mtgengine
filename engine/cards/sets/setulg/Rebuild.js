"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rebuild extends Card {
  constructor(game) {
    super(game, "Rebuild", "Urza's Legacy", "ULG");
  }
}

module.exports = Rebuild;
