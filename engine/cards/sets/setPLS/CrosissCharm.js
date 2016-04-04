"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrosissCharmBase = require("../setC13/CrosissCharm.js");

class CrosissCharm extends CrosissCharmBase {
  constructor(game) {
    super(game, "Crosis's Charm", "Planeshift", "PLS");
  }
}

module.exports = CrosissCharm;
