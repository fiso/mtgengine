"use strict";
const Constants = require ("../../../Constants");
const BlueWardBase = require("../setCED/BlueWard");

class BlueWard extends BlueWardBase {
  constructor (game) {
    super(game, "Blue Ward", "Fourth Edition", "4ED");
  }
}

module.exports = BlueWard;
