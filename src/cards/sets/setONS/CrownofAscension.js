"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrownofAscension extends UnimplementedCard {
  constructor(game) {
    super(game, "Crown of Ascension", "Onslaught", "ONS");
  }
}

module.exports = CrownofAscension;
