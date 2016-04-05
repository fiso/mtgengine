"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseDawn extends UnimplementedCard {
  constructor(game) {
    super(game, "False Dawn", "Apocalypse", "APC");
  }
}

module.exports = FalseDawn;
