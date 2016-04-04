"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorosCharmBase = require("../setC13/BorosCharm.js");

class BorosCharm extends BorosCharmBase {
  constructor(game) {
    super(game, "Boros Charm", "Gatecrash", "GTC");
  }
}

module.exports = BorosCharm;
