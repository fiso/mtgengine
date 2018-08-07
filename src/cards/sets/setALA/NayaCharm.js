"use strict";
const Constants = require ("../../../Constants");
const NayaCharmBase = require("../setC16/NayaCharm");

class NayaCharm extends NayaCharmBase {
  constructor (game) {
    super(game, "Naya Charm", "Shards of Alara", "ALA");
  }
}

module.exports = NayaCharm;
