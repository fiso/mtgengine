"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraveyardShovel extends Card {
  constructor(game) {
    super(game, "Graveyard Shovel", "Innistrad", "ISD");
  }
}

module.exports = GraveyardShovel;
