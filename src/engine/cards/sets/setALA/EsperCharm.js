"use strict";
const Constants = require ("../../../Constants");
const EsperCharmBase = require("../setC18/EsperCharm");

class EsperCharm extends EsperCharmBase {
  constructor (game) {
    super(game, "Esper Charm", "Shards of Alara", "ALA");
  }
}

module.exports = EsperCharm;
