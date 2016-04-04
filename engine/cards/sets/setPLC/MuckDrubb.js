"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MuckDrubb extends Card {
  constructor(game) {
    super(game, "Muck Drubb", "Planar Chaos", "PLC");
  }
}

module.exports = MuckDrubb;
