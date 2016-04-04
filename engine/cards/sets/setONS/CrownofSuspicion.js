"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrownofSuspicion extends Card {
  constructor(game) {
    super(game, "Crown of Suspicion", "Onslaught", "ONS");
  }
}

module.exports = CrownofSuspicion;
