"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SplinterBase = require("../setBOK/Splinter.js");

class Splinter extends SplinterBase {
  constructor(game) {
    super(game, "Splinter", "Urza's Destiny", "UDS");
  }
}

module.exports = Splinter;
