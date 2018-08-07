"use strict";
const Constants = require ("../../../Constants");
const PrismaticLensBase = require("../setC18/PrismaticLens");

class PrismaticLens extends PrismaticLensBase {
  constructor (game) {
    super(game, "Prismatic Lens", "Explorers of Ixalan", "E02");
  }
}

module.exports = PrismaticLens;
