"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormboundGeist extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormbound Geist", "Dark Ascension", "DKA");
  }
}

module.exports = StormboundGeist;
