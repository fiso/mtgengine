"use strict";
const Constants = require ("../../../Constants");
const GreenWardBase = require("../setCED/GreenWard");

class GreenWard extends GreenWardBase {
  constructor (game) {
    super(game, "Green Ward", "International Collector's Edition", "CEI");
  }
}

module.exports = GreenWard;
