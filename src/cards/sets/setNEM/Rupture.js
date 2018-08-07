"use strict";
const Constants = require ("../../../Constants");
const RuptureBase = require("../setPRM/Rupture");

class Rupture extends RuptureBase {
  constructor (game) {
    super(game, "Rupture", "Nemesis", "NEM");
  }
}

module.exports = Rupture;
