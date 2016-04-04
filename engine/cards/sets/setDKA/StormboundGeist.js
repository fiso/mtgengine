"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormboundGeist extends Card {
  constructor(game) {
    super(game, "Stormbound Geist", "Dark Ascension", "DKA");
  }
}

module.exports = StormboundGeist;
