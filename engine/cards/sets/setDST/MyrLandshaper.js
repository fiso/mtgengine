"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrLandshaper extends UnimplementedCard {
  constructor(game) {
    super(game, "Myr Landshaper", "Darksteel", "DST");
  }
}

module.exports = MyrLandshaper;
