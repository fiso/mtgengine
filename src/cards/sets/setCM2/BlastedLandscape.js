"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlastedLandscape extends UnimplementedCard {
  constructor (game) {
    super(game, "Blasted Landscape", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BlastedLandscape;
