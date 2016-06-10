"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireatWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire at Will", "Eventide", "EVE");
  }
}

module.exports = FireatWill;
