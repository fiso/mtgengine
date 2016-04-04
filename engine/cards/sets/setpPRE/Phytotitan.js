"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhytotitanBase = require("../setM15/Phytotitan.js");

class Phytotitan extends PhytotitanBase {
  constructor(game) {
    super(game, "Phytotitan", "Prerelease Events", "pPRE");
  }
}

module.exports = Phytotitan;
