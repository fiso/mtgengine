"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrownofAwe extends Card {
  constructor(game) {
    super(game, "Crown of Awe", "Onslaught", "ONS");
  }
}

module.exports = CrownofAwe;
