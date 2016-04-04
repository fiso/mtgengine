"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FodderCannonBase = require("../set8ED/FodderCannon.js");

class FodderCannon extends FodderCannonBase {
  constructor(game) {
    super(game, "Fodder Cannon", "Urza's Destiny", "UDS");
  }
}

module.exports = FodderCannon;
