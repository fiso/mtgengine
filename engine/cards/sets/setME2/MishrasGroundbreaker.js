"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MishrasGroundbreakerBase = require("../setALL/MishrasGroundbreaker.js");

class MishrasGroundbreaker extends MishrasGroundbreakerBase {
  constructor(game) {
    super(game, "Mishra's Groundbreaker", "Masters Edition II", "ME2");
  }
}

module.exports = MishrasGroundbreaker;
