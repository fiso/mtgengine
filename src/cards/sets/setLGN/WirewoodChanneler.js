"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WirewoodChanneler extends UnimplementedCard {
  constructor (game) {
    super(game, "Wirewood Channeler", "Legions", "LGN");
  }
}

module.exports = WirewoodChanneler;
