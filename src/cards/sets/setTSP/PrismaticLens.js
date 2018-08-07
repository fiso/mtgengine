"use strict";
const Constants = require ("../../../Constants");
const PrismaticLensBase = require("../setC18/PrismaticLens");

class PrismaticLens extends PrismaticLensBase {
  constructor (game) {
    super(game, "Prismatic Lens", "Time Spiral", "TSP");
  }
}

module.exports = PrismaticLens;
