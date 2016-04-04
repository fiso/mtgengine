"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrownofAscension extends Card {
  constructor(game) {
    super(game, "Crown of Ascension", "Onslaught", "ONS");
  }
}

module.exports = CrownofAscension;
