"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thoughtlace extends UnimplementedCard {
  constructor(game) {
    super(game, "Thoughtlace", "Collector's Edition", "CED");
  }
}

module.exports = Thoughtlace;
