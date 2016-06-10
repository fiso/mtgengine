"use strict";
const Constants = require ("../../../Constants");
const GrixisCharmBase = require("../setC13/GrixisCharm");

class GrixisCharm extends GrixisCharmBase {
  constructor (game) {
    super(game, "Grixis Charm", "Shards of Alara", "ALA");
  }
}

module.exports = GrixisCharm;
