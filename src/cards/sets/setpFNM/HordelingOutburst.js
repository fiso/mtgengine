"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HordelingOutburst extends UnimplementedCard {
  constructor (game) {
    super(game, "Hordeling Outburst", "Friday Night Magic", "pFNM");
  }
}

module.exports = HordelingOutburst;
