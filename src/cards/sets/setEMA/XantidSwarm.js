"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class XantidSwarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Xantid Swarm", "Eternal Masters", "EMA");
  }
}

module.exports = XantidSwarm;
