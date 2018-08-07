"use strict";
const Constants = require ("../../../Constants");
const VesuvanDoppelgangerBase = require("../setMED/VesuvanDoppelganger");

class VesuvanDoppelganger extends VesuvanDoppelgangerBase {
  constructor (game) {
    super(game, "Vesuvan Doppelganger", "Revised Edition", "3ED");
  }
}

module.exports = VesuvanDoppelganger;
