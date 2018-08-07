"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildResearch extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Research", "Apocalypse", "APC");
  }
}

module.exports = WildResearch;
