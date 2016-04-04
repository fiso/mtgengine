"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EvincarsJusticeBase = require("../setCMD/EvincarsJustice.js");

class EvincarsJustice extends EvincarsJusticeBase {
  constructor(game) {
    super(game, "Evincar's Justice", "Tempest Remastered", "TPR");
  }
}

module.exports = EvincarsJustice;
