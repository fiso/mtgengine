"use strict";
const Constants = require ("../../../Constants");
const MishrasGroundbreakerBase = require("../setME2/MishrasGroundbreaker");

class MishrasGroundbreaker extends MishrasGroundbreakerBase {
  constructor (game) {
    super(game, "Mishra's Groundbreaker", "Alliances", "ALL");
  }
}

module.exports = MishrasGroundbreaker;
