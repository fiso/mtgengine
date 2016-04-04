"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavannahLions extends UnimplementedCard {
  constructor(game) {
    super(game, "Savannah Lions", "Collector's Edition", "CED");
  }
}

module.exports = SavannahLions;
