"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DecreeofPainBase = require("../setC13/DecreeofPain.js");

class DecreeofPain extends DecreeofPainBase {
  constructor(game) {
    super(game, "Decree of Pain", "Scourge", "SCG");
  }
}

module.exports = DecreeofPain;
