"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevouringSwarm extends UnimplementedCard {
  constructor(game) {
    super(game, "Devouring Swarm", "Magic 2012", "M12");
  }
}

module.exports = DevouringSwarm;
