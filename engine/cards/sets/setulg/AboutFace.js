"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AboutFace extends Card {
  constructor(game) {
    super(game, "About Face", "Urza's Legacy", "ULG");
  }
}

module.exports = AboutFace;
