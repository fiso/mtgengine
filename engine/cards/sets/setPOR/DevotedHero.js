"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevotedHero extends UnimplementedCard {
  constructor(game) {
    super(game, "Devoted Hero", "Portal", "POR");
  }
}

module.exports = DevotedHero;
