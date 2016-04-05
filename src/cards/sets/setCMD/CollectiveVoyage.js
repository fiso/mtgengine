"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CollectiveVoyage extends UnimplementedCard {
  constructor(game) {
    super(game, "Collective Voyage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = CollectiveVoyage;
