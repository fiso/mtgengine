"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrownofVigor extends Card {
  constructor(game) {
    super(game, "Crown of Vigor", "Onslaught", "ONS");
  }
}

module.exports = CrownofVigor;
