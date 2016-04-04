"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevouringSwarm extends Card {
  constructor(game) {
    super(game, "Devouring Swarm", "Magic 2012", "M12");
  }
}

module.exports = DevouringSwarm;
