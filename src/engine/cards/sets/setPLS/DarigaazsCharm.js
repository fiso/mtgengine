"use strict";
const Constants = require ("../../../Constants");
const DarigaazsCharmBase = require("../setDDE/DarigaazsCharm");

class DarigaazsCharm extends DarigaazsCharmBase {
  constructor (game) {
    super(game, "Darigaaz's Charm", "Planeshift", "PLS");
  }
}

module.exports = DarigaazsCharm;
