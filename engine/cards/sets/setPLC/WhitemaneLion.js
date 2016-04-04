"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhitemaneLionBase = require("../setC14/WhitemaneLion.js");

class WhitemaneLion extends WhitemaneLionBase {
  constructor(game) {
    super(game, "Whitemane Lion", "Planar Chaos", "PLC");
  }
}

module.exports = WhitemaneLion;
