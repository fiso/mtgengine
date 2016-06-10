"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfectiousHost extends UnimplementedCard {
  constructor (game) {
    super(game, "Infectious Host", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = InfectiousHost;
