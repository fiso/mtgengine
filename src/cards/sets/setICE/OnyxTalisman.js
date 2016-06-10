"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnyxTalisman extends UnimplementedCard {
  constructor (game) {
    super(game, "Onyx Talisman", "Ice Age", "ICE");
  }
}

module.exports = OnyxTalisman;
