"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BakuAltar extends UnimplementedCard {
  constructor(game) {
    super(game, "Baku Altar", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BakuAltar;
