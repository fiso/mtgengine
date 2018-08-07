"use strict";
const Constants = require ("../../../Constants");
const PrismaticLensBase = require("../setC18/PrismaticLens");

class PrismaticLens extends PrismaticLensBase {
  constructor (game) {
    super(game, "Prismatic Lens", "Eternal Masters", "EMA");
  }
}

module.exports = PrismaticLens;
