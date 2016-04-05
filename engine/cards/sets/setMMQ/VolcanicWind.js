"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicWind extends UnimplementedCard {
  constructor(game) {
    super(game, "Volcanic Wind", "Mercadian Masques", "MMQ");
  }
}

module.exports = VolcanicWind;
