"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeyDruid extends UnimplementedCard {
  constructor(game) {
    super(game, "Ley Druid", "Collector's Edition", "CED");
  }
}

module.exports = LeyDruid;
