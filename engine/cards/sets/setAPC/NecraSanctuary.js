"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecraSanctuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Necra Sanctuary", "Apocalypse", "APC");
  }
}

module.exports = NecraSanctuary;
