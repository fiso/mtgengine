"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LatNamsLegacy extends UnimplementedCard {
  constructor(game) {
    super(game, "Lat-Nam's Legacy", "Alliances", "ALL");
  }
}

module.exports = LatNamsLegacy;
