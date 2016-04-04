"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoxJetBase = require("../setCED/MoxJet.js");

class MoxJet extends MoxJetBase {
  constructor(game) {
    super(game, "Mox Jet", "Vintage Masters", "VMA");
  }
}

module.exports = MoxJet;
