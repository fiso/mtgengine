"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SimianGruntsBase = require("../setULG/SimianGrunts.js");

class SimianGrunts extends SimianGruntsBase {
  constructor(game) {
    super(game, "Simian Grunts", "Vintage Masters", "VMA");
  }
}

module.exports = SimianGrunts;
