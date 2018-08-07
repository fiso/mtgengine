"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EntirelyNormalArmchair extends UnimplementedCard {
  constructor (game) {
    super(game, "Entirely Normal Armchair", "Unstable", "UST");
  }
}

module.exports = EntirelyNormalArmchair;
