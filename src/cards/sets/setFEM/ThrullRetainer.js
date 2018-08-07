"use strict";
const Constants = require ("../../../Constants");
const ThrullRetainerBase = require("../setMED/ThrullRetainer");

class ThrullRetainer extends ThrullRetainerBase {
  constructor (game) {
    super(game, "Thrull Retainer", "Fallen Empires", "FEM");
  }
}

module.exports = ThrullRetainer;
