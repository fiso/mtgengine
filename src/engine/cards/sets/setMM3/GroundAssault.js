"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GroundAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Ground Assault", "Modern Masters 2017", "MM3");
  }
}

module.exports = GroundAssault;
