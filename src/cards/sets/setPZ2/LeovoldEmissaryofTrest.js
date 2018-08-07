"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeovoldEmissaryofTrest extends UnimplementedCard {
  constructor (game) {
    super(game, "Leovold, Emissary of Trest", "You Make the Cube", "PZ2");
  }
}

module.exports = LeovoldEmissaryofTrest;
