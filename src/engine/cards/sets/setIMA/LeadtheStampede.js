"use strict";
const Constants = require ("../../../Constants");
const LeadtheStampedeBase = require("../setDDU/LeadtheStampede");

class LeadtheStampede extends LeadtheStampedeBase {
  constructor (game) {
    super(game, "Lead the Stampede", "Iconic Masters", "IMA");
  }
}

module.exports = LeadtheStampede;
