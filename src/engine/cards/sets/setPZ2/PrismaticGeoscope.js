"use strict";
const Constants = require ("../../../Constants");
const PrismaticGeoscopeBase = require("../setJ17/PrismaticGeoscope");

class PrismaticGeoscope extends PrismaticGeoscopeBase {
  constructor (game) {
    super(game, "Prismatic Geoscope", "You Make the Cube", "PZ2");
  }
}

module.exports = PrismaticGeoscope;
