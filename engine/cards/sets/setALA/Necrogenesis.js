"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecrogenesisBase = require("../setCMD/Necrogenesis.js");

class Necrogenesis extends NecrogenesisBase {
  constructor(game) {
    super(game, "Necrogenesis", "Shards of Alara", "ALA");
  }
}

module.exports = Necrogenesis;
