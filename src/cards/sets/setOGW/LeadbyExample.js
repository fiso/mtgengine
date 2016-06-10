"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeadbyExample extends UnimplementedCard {
  constructor (game) {
    super(game, "Lead by Example", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = LeadbyExample;
