"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CullingtheWeak extends UnimplementedCard {
  constructor(game) {
    super(game, "Culling the Weak", "Exodus", "EXO");
  }
}

module.exports = CullingtheWeak;
