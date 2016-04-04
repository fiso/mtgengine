"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CouncilofAdvisors extends Card {
  constructor(game) {
    super(game, "Council of Advisors", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CouncilofAdvisors;
