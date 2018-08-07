"use strict";
const Constants = require ("../../../Constants");
const PrismaticGeoscopeBase = require("../setJ17/PrismaticGeoscope");

class PrismaticGeoscope extends PrismaticGeoscopeBase {
  constructor (game) {
    super(game, "Prismatic Geoscope", "Commander 2016", "C16");
  }
}

module.exports = PrismaticGeoscope;
