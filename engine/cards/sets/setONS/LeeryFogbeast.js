"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeeryFogbeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Leery Fogbeast", "Onslaught", "ONS");
  }
}

module.exports = LeeryFogbeast;
