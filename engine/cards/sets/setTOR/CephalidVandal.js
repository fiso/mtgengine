"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidVandal extends UnimplementedCard {
  constructor(game) {
    super(game, "Cephalid Vandal", "Torment", "TOR");
  }
}

module.exports = CephalidVandal;
