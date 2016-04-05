"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IceStorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Ice Storm", "Collector's Edition", "CED");
  }
}

module.exports = IceStorm;
