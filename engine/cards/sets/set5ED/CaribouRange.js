"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaribouRange extends UnimplementedCard {
  constructor(game) {
    super(game, "Caribou Range", "Fifth Edition", "5ED");
  }
}

module.exports = CaribouRange;
