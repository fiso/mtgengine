"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarlordsFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Warlord's Fury", "Dominaria", "DOM");
  }
}

module.exports = WarlordsFury;
