"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidLooter extends UnimplementedCard {
  constructor (game) {
    super(game, "Cephalid Looter", "Odyssey", "ODY");
  }
}

module.exports = CephalidLooter;
