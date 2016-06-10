"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasLiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Gaea's Liege", "Collector's Edition", "CED");
  }
}

module.exports = GaeasLiege;
