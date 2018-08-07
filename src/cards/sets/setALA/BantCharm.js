"use strict";
const Constants = require ("../../../Constants");
const BantCharmBase = require("../setC18/BantCharm");

class BantCharm extends BantCharmBase {
  constructor (game) {
    super(game, "Bant Charm", "Shards of Alara", "ALA");
  }
}

module.exports = BantCharm;
