"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VillageCannibals extends UnimplementedCard {
  constructor (game) {
    super(game, "Village Cannibals", "Innistrad", "ISD");
  }
}

module.exports = VillageCannibals;
