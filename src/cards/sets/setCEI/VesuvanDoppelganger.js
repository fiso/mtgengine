"use strict";
const Constants = require ("../../../Constants");
const VesuvanDoppelgangerBase = require("../setCED/VesuvanDoppelganger");

class VesuvanDoppelganger extends VesuvanDoppelgangerBase {
  constructor(game) {
    super(game, "Vesuvan Doppelganger", "International Collector's Edition", "CEI");
  }
}

module.exports = VesuvanDoppelganger;
