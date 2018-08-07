"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MastermindsAcquisition extends UnimplementedCard {
  constructor (game) {
    super(game, "Mastermind's Acquisition", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = MastermindsAcquisition;
