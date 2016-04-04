"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarigaazsCharmBase = require("../setDDE/DarigaazsCharm.js");

class DarigaazsCharm extends DarigaazsCharmBase {
  constructor(game) {
    super(game, "Darigaaz's Charm", "Planeshift", "PLS");
  }
}

module.exports = DarigaazsCharm;
