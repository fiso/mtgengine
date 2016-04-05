"use strict";
const Constants = require ("../../../Constants");
const GeistHonoredMonkBase = require("../setC14/GeistHonoredMonk");

class GeistHonoredMonk extends GeistHonoredMonkBase {
  constructor(game) {
    super(game, "Geist-Honored Monk", "Innistrad", "ISD");
  }
}

module.exports = GeistHonoredMonk;
