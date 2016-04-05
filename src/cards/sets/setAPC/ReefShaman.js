"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReefShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Reef Shaman", "Apocalypse", "APC");
  }
}

module.exports = ReefShaman;
