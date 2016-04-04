"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Earthcraft extends Card {
  constructor(game) {
    super(game, "Earthcraft", "Tempest", "TMP");
  }
}

module.exports = Earthcraft;
