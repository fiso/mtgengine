"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CharBase = require("../setp15A/Char.js");

class Char extends CharBase {
  constructor(game) {
    super(game, "Char", "From the Vault: Twenty", "V13");
  }
}

module.exports = Char;
