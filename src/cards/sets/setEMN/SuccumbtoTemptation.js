"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuccumbtoTemptation extends UnimplementedCard {
  constructor (game) {
    super(game, "Succumb to Temptation", "Eldritch Moon", "EMN");
  }
}

module.exports = SuccumbtoTemptation;
