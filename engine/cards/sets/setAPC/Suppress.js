"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Suppress extends UnimplementedCard {
  constructor(game) {
    super(game, "Suppress", "Apocalypse", "APC");
  }
}

module.exports = Suppress;
