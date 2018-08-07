"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrownofVigor extends UnimplementedCard {
  constructor (game) {
    super(game, "Crown of Vigor", "Onslaught", "ONS");
  }
}

module.exports = CrownofVigor;
