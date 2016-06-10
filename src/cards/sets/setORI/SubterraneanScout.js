"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SubterraneanScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Subterranean Scout", "Magic Origins", "ORI");
  }
}

module.exports = SubterraneanScout;
