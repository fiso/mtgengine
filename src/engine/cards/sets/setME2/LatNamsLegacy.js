"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LatNamsLegacy extends UnimplementedCard {
  constructor (game) {
    super(game, "Lat-Nam's Legacy", "Masters Edition II", "ME2");
  }
}

module.exports = LatNamsLegacy;
