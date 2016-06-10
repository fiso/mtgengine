"use strict";
const Constants = require ("../../../Constants");
const HuntingTriadBase = require("../setC14/HuntingTriad");

class HuntingTriad extends HuntingTriadBase {
  constructor (game) {
    super(game, "Hunting Triad", "Morningtide", "MOR");
  }
}

module.exports = HuntingTriad;
