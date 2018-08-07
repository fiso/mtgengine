"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReaverAmbush extends UnimplementedCard {
  constructor (game) {
    super(game, "Reaver Ambush", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ReaverAmbush;
