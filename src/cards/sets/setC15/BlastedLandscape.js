"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlastedLandscape extends UnimplementedCard {
  constructor (game) {
    super(game, "Blasted Landscape", "Commander 2015", "C15");
  }
}

module.exports = BlastedLandscape;
