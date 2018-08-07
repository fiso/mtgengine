"use strict";
const Constants = require ("../../../Constants");
const BlueWardBase = require("../set4ED/BlueWard");

class BlueWard extends BlueWardBase {
  constructor (game) {
    super(game, "Blue Ward", "Unlimited Edition", "2ED");
  }
}

module.exports = BlueWard;
