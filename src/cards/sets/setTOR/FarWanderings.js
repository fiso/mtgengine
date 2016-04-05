"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FarWanderings extends UnimplementedCard {
  constructor(game) {
    super(game, "Far Wanderings", "Torment", "TOR");
  }
}

module.exports = FarWanderings;
