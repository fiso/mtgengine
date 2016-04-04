"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrixisCharmBase = require("../setC13/GrixisCharm.js");

class GrixisCharm extends GrixisCharmBase {
  constructor(game) {
    super(game, "Grixis Charm", "Shards of Alara", "ALA");
  }
}

module.exports = GrixisCharm;
