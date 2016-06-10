"use strict";
const Constants = require ("../../../Constants");
const ThrullRetainerBase = require("../setFEM/ThrullRetainer");

class ThrullRetainer extends ThrullRetainerBase {
  constructor (game) {
    super(game, "Thrull Retainer", "Masters Edition", "MED");
  }
}

module.exports = ThrullRetainer;
