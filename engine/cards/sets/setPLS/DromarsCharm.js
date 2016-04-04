"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DromarsCharmBase = require("../setC13/DromarsCharm.js");

class DromarsCharm extends DromarsCharmBase {
  constructor(game) {
    super(game, "Dromar's Charm", "Planeshift", "PLS");
  }
}

module.exports = DromarsCharm;
