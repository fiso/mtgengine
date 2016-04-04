"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wanderlust extends UnimplementedCard {
  constructor(game) {
    super(game, "Wanderlust", "Collector's Edition", "CED");
  }
}

module.exports = Wanderlust;
