"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deathlace extends UnimplementedCard {
  constructor(game) {
    super(game, "Deathlace", "Collector's Edition", "CED");
  }
}

module.exports = Deathlace;
