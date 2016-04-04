"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThrullRetainerBase = require("../setFEM/ThrullRetainer.js");

class ThrullRetainer extends ThrullRetainerBase {
  constructor(game) {
    super(game, "Thrull Retainer", "Masters Edition", "MED");
  }
}

module.exports = ThrullRetainer;
