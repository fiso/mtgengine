"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thaumatog extends UnimplementedCard {
  constructor (game) {
    super(game, "Thaumatog", "Odyssey", "ODY");
  }
}

module.exports = Thaumatog;
