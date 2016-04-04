"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CollectiveVoyage extends Card {
  constructor(game) {
    super(game, "Collective Voyage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = CollectiveVoyage;
