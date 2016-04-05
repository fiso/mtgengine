"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Badlands extends UnimplementedCard {
  constructor(game) {
    super(game, "Badlands", "Collector's Edition", "CED");
  }
}

module.exports = Badlands;
