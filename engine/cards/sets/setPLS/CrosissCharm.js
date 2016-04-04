"use strict";
const Constants = require ("../../../Constants");
const CrosissCharmBase = require("../setC13/CrosissCharm");

class CrosissCharm extends CrosissCharmBase {
  constructor(game) {
    super(game, "Crosis's Charm", "Planeshift", "PLS");
  }
}

module.exports = CrosissCharm;
