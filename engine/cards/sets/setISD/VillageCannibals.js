"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VillageCannibals extends Card {
  constructor(game) {
    super(game, "Village Cannibals", "Innistrad", "ISD");
  }
}

module.exports = VillageCannibals;
