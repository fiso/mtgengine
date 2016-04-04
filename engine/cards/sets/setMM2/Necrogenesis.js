"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecrogenesisBase = require("../setCMD/Necrogenesis.js");

class Necrogenesis extends NecrogenesisBase {
  constructor(game) {
    super(game, "Necrogenesis", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Necrogenesis;
