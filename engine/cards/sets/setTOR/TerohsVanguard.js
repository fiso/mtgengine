"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerohsVanguard extends UnimplementedCard {
  constructor(game) {
    super(game, "Teroh's Vanguard", "Torment", "TOR");
  }
}

module.exports = TerohsVanguard;
