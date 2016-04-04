"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scabland extends Card {
  constructor(game) {
    super(game, "Scabland", "Tempest", "TMP");
  }
}

module.exports = Scabland;
