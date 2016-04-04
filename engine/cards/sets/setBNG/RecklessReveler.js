"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecklessReveler extends Card {
  constructor(game) {
    super(game, "Reckless Reveler", "Born of the Gods", "BNG");
  }
}

module.exports = RecklessReveler;
