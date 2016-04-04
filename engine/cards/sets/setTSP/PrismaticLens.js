"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrismaticLens extends Card {
  constructor(game) {
    super(game, "Prismatic Lens", "Time Spiral", "TSP");
  }
}

module.exports = PrismaticLens;
