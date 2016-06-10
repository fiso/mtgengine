"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FinalRevels extends UnimplementedCard {
  constructor (game) {
    super(game, "Final Revels", "Lorwyn", "LRW");
  }
}

module.exports = FinalRevels;
