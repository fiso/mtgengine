"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Resurrection extends UnimplementedCard {
  constructor (game) {
    super(game, "Resurrection", "Collector's Edition", "CED");
  }
}

module.exports = Resurrection;
