"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thumbscrews extends Card {
  constructor(game) {
    super(game, "Thumbscrews", "Tempest", "TMP");
  }
}

module.exports = Thumbscrews;
