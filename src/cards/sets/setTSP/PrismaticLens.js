"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrismaticLens extends UnimplementedCard {
  constructor(game) {
    super(game, "Prismatic Lens", "Time Spiral", "TSP");
  }
}

module.exports = PrismaticLens;
