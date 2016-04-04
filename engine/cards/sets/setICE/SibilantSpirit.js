"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SibilantSpiritBase = require("../set6ED/SibilantSpirit.js");

class SibilantSpirit extends SibilantSpiritBase {
  constructor(game) {
    super(game, "Sibilant Spirit", "Ice Age", "ICE");
  }
}

module.exports = SibilantSpirit;
