"use strict";
const Constants = require ("../../../Constants");
const VeryCrypticCommandBase = require("../setUST/VeryCrypticCommand");

class VeryCrypticCommand extends VeryCrypticCommandBase {
  constructor (game) {
    super(game, "Very Cryptic Command", "Unstable", "UST");
  }
}

module.exports = VeryCrypticCommand;
