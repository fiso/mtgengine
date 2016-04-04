"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrypticCommandBase = require("../setLRW/CrypticCommand.js");

class CrypticCommand extends CrypticCommandBase {
  constructor(game) {
    super(game, "Cryptic Command", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CrypticCommand;
