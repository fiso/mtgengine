"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifesLegacy extends UnimplementedCard {
  constructor(game) {
    super(game, "Life's Legacy", "Magic 2015 Core Set", "M15");
  }
}

module.exports = LifesLegacy;
