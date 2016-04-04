"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GeistHonoredMonkBase = require("../setC14/GeistHonoredMonk.js");

class GeistHonoredMonk extends GeistHonoredMonkBase {
  constructor(game) {
    super(game, "Geist-Honored Monk", "Innistrad", "ISD");
  }
}

module.exports = GeistHonoredMonk;
