"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KissoftheAmesha extends Card {
  constructor(game) {
    super(game, "Kiss of the Amesha", "Shards of Alara", "ALA");
  }
}

module.exports = KissoftheAmesha;
