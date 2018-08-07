"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrozenSolid extends UnimplementedCard {
  constructor (game) {
    super(game, "Frozen Solid", "Coldsnap", "CSP");
  }
}

module.exports = FrozenSolid;
