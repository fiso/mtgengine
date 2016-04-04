"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TriskelavusBase = require("../setCMD/Triskelavus.js");

class Triskelavus extends TriskelavusBase {
  constructor(game) {
    super(game, "Triskelavus", "Time Spiral", "TSP");
  }
}

module.exports = Triskelavus;
