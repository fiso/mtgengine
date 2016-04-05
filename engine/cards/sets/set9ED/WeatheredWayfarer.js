"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeatheredWayfarer extends UnimplementedCard {
  constructor(game) {
    super(game, "Weathered Wayfarer", "Ninth Edition", "9ED");
  }
}

module.exports = WeatheredWayfarer;
