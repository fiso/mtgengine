"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildernessElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Wilderness Elemental", "Coldsnap", "CSP");
  }
}

module.exports = WildernessElemental;
