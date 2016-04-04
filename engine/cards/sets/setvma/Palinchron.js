"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PalinchronBase = require("../setULG/Palinchron.js");

class Palinchron extends PalinchronBase {
  constructor(game) {
    super(game, "Palinchron", "Vintage Masters", "VMA");
  }
}

module.exports = Palinchron;
