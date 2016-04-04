"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnsummonBase = require("../set6ED/Unsummon.js");

class Unsummon extends UnsummonBase {
  constructor(game) {
    super(game, "Unsummon", "International Collector's Edition", "CEI");
  }
}

module.exports = Unsummon;
