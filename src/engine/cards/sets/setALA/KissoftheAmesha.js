"use strict";
const Constants = require ("../../../Constants");
const KissoftheAmeshaBase = require("../setBBD/KissoftheAmesha");

class KissoftheAmesha extends KissoftheAmeshaBase {
  constructor (game) {
    super(game, "Kiss of the Amesha", "Shards of Alara", "ALA");
  }
}

module.exports = KissoftheAmesha;
