"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrownofAwe extends UnimplementedCard {
  constructor(game) {
    super(game, "Crown of Awe", "Onslaught", "ONS");
  }
}

module.exports = CrownofAwe;
