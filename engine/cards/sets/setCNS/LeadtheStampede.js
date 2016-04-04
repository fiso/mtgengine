"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeadtheStampedeBase = require("../setDDH/LeadtheStampede.js");

class LeadtheStampede extends LeadtheStampedeBase {
  constructor(game) {
    super(game, "Lead the Stampede", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = LeadtheStampede;
