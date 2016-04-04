"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshenPowderBase = require("../set6ED/AshenPowder.js");

class AshenPowder extends AshenPowderBase {
  constructor(game) {
    super(game, "Ashen Powder", "Mirage", "MIR");
  }
}

module.exports = AshenPowder;
