"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GatherthePack extends UnimplementedCard {
  constructor(game) {
    super(game, "Gather the Pack", "Magic Origins", "ORI");
  }
}

module.exports = GatherthePack;
