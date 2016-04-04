"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeadbyExample extends Card {
  constructor(game) {
    super(game, "Lead by Example", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = LeadbyExample;
