"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvenWarhounds extends Card {
  constructor(game) {
    super(game, "Elven Warhounds", "Tempest", "TMP");
  }
}

module.exports = ElvenWarhounds;
