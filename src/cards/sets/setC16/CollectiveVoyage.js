"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CollectiveVoyage extends UnimplementedCard {
  constructor (game) {
    super(game, "Collective Voyage", "Commander 2016", "C16");
  }
}

module.exports = CollectiveVoyage;
