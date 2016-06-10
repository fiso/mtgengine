"use strict";
const Constants = require ("../../../Constants");
const MishrasGroundbreakerBase = require("../setALL/MishrasGroundbreaker");

class MishrasGroundbreaker extends MishrasGroundbreakerBase {
  constructor (game) {
    super(game, "Mishra's Groundbreaker", "Masters Edition II", "ME2");
  }
}

module.exports = MishrasGroundbreaker;
