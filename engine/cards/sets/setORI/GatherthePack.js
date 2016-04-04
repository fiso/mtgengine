"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GatherthePack extends Card {
  constructor(game) {
    super(game, "Gather the Pack", "Magic Origins", "ORI");
  }
}

module.exports = GatherthePack;
