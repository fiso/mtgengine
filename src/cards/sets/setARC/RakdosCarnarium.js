"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakdosCarnarium extends UnimplementedCard {
  constructor (game) {
    super(game, "Rakdos Carnarium", "Archenemy", "ARC");
  }
}

module.exports = RakdosCarnarium;
