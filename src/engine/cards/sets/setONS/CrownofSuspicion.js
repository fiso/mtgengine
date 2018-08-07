"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrownofSuspicion extends UnimplementedCard {
  constructor (game) {
    super(game, "Crown of Suspicion", "Onslaught", "ONS");
  }
}

module.exports = CrownofSuspicion;
