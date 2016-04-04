"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrypticCommandBase = require("../setLRW/CrypticCommand.js");

class CrypticCommand extends CrypticCommandBase {
  constructor(game) {
    super(game, "Cryptic Command", "Modern Masters", "MMA");
  }
}

module.exports = CrypticCommand;
