"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WirewoodChanneler extends Card {
  constructor(game) {
    super(game, "Wirewood Channeler", "Legions", "LGN");
  }
}

module.exports = WirewoodChanneler;
