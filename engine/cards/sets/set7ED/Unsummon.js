"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnsummonBase = require("../set6ED/Unsummon.js");

class Unsummon extends UnsummonBase {
  constructor(game) {
    super(game, "Unsummon", "Seventh Edition", "7ED");
  }
}

module.exports = Unsummon;
