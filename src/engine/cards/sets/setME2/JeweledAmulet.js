"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeweledAmulet extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeweled Amulet", "Masters Edition II", "ME2");
  }
}

module.exports = JeweledAmulet;
