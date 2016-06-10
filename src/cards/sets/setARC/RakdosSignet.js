"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakdosSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Rakdos Signet", "Archenemy", "ARC");
  }
}

module.exports = RakdosSignet;
