"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarmicJusticeBase = require("../setC15/KarmicJustice.js");

class KarmicJustice extends KarmicJusticeBase {
  constructor(game) {
    super(game, "Karmic Justice", "Odyssey", "ODY");
  }
}

module.exports = KarmicJustice;
