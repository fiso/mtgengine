"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HuntingTriadBase = require("../setC14/HuntingTriad.js");

class HuntingTriad extends HuntingTriadBase {
  constructor(game) {
    super(game, "Hunting Triad", "Morningtide", "MOR");
  }
}

module.exports = HuntingTriad;
