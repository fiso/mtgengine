"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronclawOrcs extends UnimplementedCard {
  constructor(game) {
    super(game, "Ironclaw Orcs", "Collector's Edition", "CED");
  }
}

module.exports = IronclawOrcs;
