"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeweledSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeweled Spirit", "Prophecy", "PCY");
  }
}

module.exports = JeweledSpirit;
