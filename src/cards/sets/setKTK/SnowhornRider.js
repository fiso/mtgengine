"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowhornRider extends UnimplementedCard {
  constructor (game) {
    super(game, "Snowhorn Rider", "Khans of Tarkir", "KTK");
  }
}

module.exports = SnowhornRider;
