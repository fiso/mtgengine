"use strict";
const Constants = require ("../../../Constants");
const LeadbyExampleBase = require("../setBBD/LeadbyExample");

class LeadbyExample extends LeadbyExampleBase {
  constructor (game) {
    super(game, "Lead by Example", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = LeadbyExample;
