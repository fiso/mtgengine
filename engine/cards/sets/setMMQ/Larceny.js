"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LarcenyBase = require("../set8ED/Larceny.js");

class Larceny extends LarcenyBase {
  constructor(game) {
    super(game, "Larceny", "Mercadian Masques", "MMQ");
  }
}

module.exports = Larceny;
