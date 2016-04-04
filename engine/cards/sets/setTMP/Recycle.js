"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Recycle extends Card {
  constructor(game) {
    super(game, "Recycle", "Tempest", "TMP");
  }
}

module.exports = Recycle;
