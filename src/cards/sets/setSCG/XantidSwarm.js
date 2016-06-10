"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class XantidSwarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Xantid Swarm", "Scourge", "SCG");
  }
}

module.exports = XantidSwarm;
