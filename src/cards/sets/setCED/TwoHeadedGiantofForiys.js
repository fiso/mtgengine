"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwoHeadedGiantofForiys extends UnimplementedCard {
  constructor (game) {
    super(game, "Two-Headed Giant of Foriys", "Collector's Edition", "CED");
  }
}

module.exports = TwoHeadedGiantofForiys;
