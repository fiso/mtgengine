"use strict";
const Constants = require ("../../../Constants");
const BlueWardBase = require("../set4ED/BlueWard");

class BlueWard extends BlueWardBase {
  constructor (game) {
    super(game, "Blue Ward", "Limited Edition Beta", "LEB");
  }
}

module.exports = BlueWard;
