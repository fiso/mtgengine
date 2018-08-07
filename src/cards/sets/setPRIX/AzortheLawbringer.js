"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzortheLawbringer extends UnimplementedCard {
  constructor (game) {
    super(game, "Azor, the Lawbringer", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = AzortheLawbringer;
