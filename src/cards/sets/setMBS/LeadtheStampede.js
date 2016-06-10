"use strict";
const Constants = require ("../../../Constants");
const LeadtheStampedeBase = require("../setDDH/LeadtheStampede");

class LeadtheStampede extends LeadtheStampedeBase {
  constructor (game) {
    super(game, "Lead the Stampede", "Mirrodin Besieged", "MBS");
  }
}

module.exports = LeadtheStampede;
