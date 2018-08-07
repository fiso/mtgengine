"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Cephalid Scout", "Odyssey", "ODY");
  }
}

module.exports = CephalidScout;
