"use strict";
const Constants = require ("../../../Constants");
const VesuvanDoppelgangerBase = require("../setCED/VesuvanDoppelganger");

class VesuvanDoppelganger extends VesuvanDoppelgangerBase {
  constructor (game) {
    super(game, "Vesuvan Doppelganger", "Revised Edition", "3ED");
  }
}

module.exports = VesuvanDoppelganger;
