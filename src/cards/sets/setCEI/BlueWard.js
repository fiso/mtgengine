"use strict";
const Constants = require ("../../../Constants");
const BlueWardBase = require("../setCED/BlueWard");

class BlueWard extends BlueWardBase {
  constructor (game) {
    super(game, "Blue Ward", "International Collector's Edition", "CEI");
  }
}

module.exports = BlueWard;
