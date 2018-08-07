"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlurryBeeble extends UnimplementedCard {
  constructor (game) {
    super(game, "Blurry Beeble", "Unstable", "UST");
  }
}

module.exports = BlurryBeeble;
