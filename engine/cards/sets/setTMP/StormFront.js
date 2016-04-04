"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormFront extends Card {
  constructor(game) {
    super(game, "Storm Front", "Tempest", "TMP");
  }
}

module.exports = StormFront;
