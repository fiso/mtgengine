"use strict";
const Constants = require ("../../../Constants");
const AnabaBodyguardBase = require("../set10E/AnabaBodyguard");

class AnabaBodyguard extends AnabaBodyguardBase {
  constructor (game) {
    super(game, "Anaba Bodyguard", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AnabaBodyguard;
