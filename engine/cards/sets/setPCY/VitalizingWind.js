"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VitalizingWind extends UnimplementedCard {
  constructor(game) {
    super(game, "Vitalizing Wind", "Prophecy", "PCY");
  }
}

module.exports = VitalizingWind;
