"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SolidarityBase = require("../set8ED/Solidarity.js");

class Solidarity extends SolidarityBase {
  constructor(game) {
    super(game, "Solidarity", "Urza's Destiny", "UDS");
  }
}

module.exports = Solidarity;
