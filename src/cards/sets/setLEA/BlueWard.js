"use strict";
const Constants = require ("../../../Constants");
const BlueWardBase = require("../setCED/BlueWard");

class BlueWard extends BlueWardBase {
  constructor (game) {
    super(game, "Blue Ward", "Limited Edition Alpha", "LEA");
  }
}

module.exports = BlueWard;
