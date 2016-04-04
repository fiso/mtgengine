"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CouncilofAdvisors extends UnimplementedCard {
  constructor(game) {
    super(game, "Council of Advisors", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CouncilofAdvisors;
