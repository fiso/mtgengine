"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmmessiTome extends Card {
  constructor(game) {
    super(game, "Emmessi Tome", "Tempest", "TMP");
  }
}

module.exports = EmmessiTome;
