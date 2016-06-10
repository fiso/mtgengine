"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CleaverRiot extends UnimplementedCard {
  constructor (game) {
    super(game, "Cleaver Riot", "Magic 2013", "M13");
  }
}

module.exports = CleaverRiot;
