"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranBodyguard extends UnimplementedCard {
  constructor(game) {
    super(game, "Veteran Bodyguard", "Collector's Edition", "CED");
  }
}

module.exports = VeteranBodyguard;
