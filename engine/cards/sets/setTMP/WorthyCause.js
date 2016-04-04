"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WorthyCause extends Card {
  constructor(game) {
    super(game, "Worthy Cause", "Tempest", "TMP");
  }
}

module.exports = WorthyCause;
