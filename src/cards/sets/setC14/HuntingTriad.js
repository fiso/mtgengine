"use strict";
const Constants = require ("../../../Constants");
const HuntingTriadBase = require("../setCMA/HuntingTriad");

class HuntingTriad extends HuntingTriadBase {
  constructor (game) {
    super(game, "Hunting Triad", "Commander 2014", "C14");
  }
}

module.exports = HuntingTriad;
