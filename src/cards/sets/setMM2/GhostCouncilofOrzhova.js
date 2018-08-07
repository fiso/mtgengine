"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostCouncilofOrzhova extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghost Council of Orzhova", "Modern Masters 2015", "MM2");
  }
}

module.exports = GhostCouncilofOrzhova;
