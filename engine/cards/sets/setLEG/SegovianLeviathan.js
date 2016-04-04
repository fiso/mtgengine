"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SegovianLeviathanBase = require("../set6ED/SegovianLeviathan.js");

class SegovianLeviathan extends SegovianLeviathanBase {
  constructor(game) {
    super(game, "Segovian Leviathan", "Legends", "LEG");
  }
}

module.exports = SegovianLeviathan;
