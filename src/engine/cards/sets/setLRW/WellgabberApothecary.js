"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WellgabberApothecary extends UnimplementedCard {
  constructor (game) {
    super(game, "Wellgabber Apothecary", "Lorwyn", "LRW");
  }
}

module.exports = WellgabberApothecary;
