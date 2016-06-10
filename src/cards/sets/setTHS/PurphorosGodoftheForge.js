"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PurphorosGodoftheForge extends UnimplementedCard {
  constructor (game) {
    super(game, "Purphoros, God of the Forge", "Theros", "THS");
  }
}

module.exports = PurphorosGodoftheForge;
