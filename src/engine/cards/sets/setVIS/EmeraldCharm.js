"use strict";
const Constants = require ("../../../Constants");
const EmeraldCharmBase = require("../setWC98/EmeraldCharm");

class EmeraldCharm extends EmeraldCharmBase {
  constructor (game) {
    super(game, "Emerald Charm", "Visions", "VIS");
  }
}

module.exports = EmeraldCharm;
