"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlashBase = require("../set6ED/Flash.js");

class Flash extends FlashBase {
  constructor(game) {
    super(game, "Flash", "Mirage", "MIR");
  }
}

module.exports = Flash;
