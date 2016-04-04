"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlueWardBase = require("../setCED/BlueWard.js");

class BlueWard extends BlueWardBase {
  constructor(game) {
    super(game, "Blue Ward", "International Collector's Edition", "CEI");
  }
}

module.exports = BlueWard;
