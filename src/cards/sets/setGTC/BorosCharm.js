"use strict";
const Constants = require ("../../../Constants");
const BorosCharmBase = require("../setC13/BorosCharm");

class BorosCharm extends BorosCharmBase {
  constructor (game) {
    super(game, "Boros Charm", "Gatecrash", "GTC");
  }
}

module.exports = BorosCharm;
