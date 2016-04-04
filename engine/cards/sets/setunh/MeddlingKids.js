"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeddlingKids extends UnimplementedCard {
  constructor(game) {
    super(game, "Meddling Kids", "Unhinged", "UNH");
  }
}

module.exports = MeddlingKids;
