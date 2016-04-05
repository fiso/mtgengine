"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tundra extends UnimplementedCard {
  constructor(game) {
    super(game, "Tundra", "Collector's Edition", "CED");
  }
}

module.exports = Tundra;
