"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeweledAmulet extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeweled Amulet", "Ice Age", "ICE");
  }
}

module.exports = JeweledAmulet;
