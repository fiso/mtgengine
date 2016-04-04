"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuicksandBase = require("../setCNS/Quicksand.js");

class Quicksand extends QuicksandBase {
  constructor(game) {
    super(game, "Quicksand", "Visions", "VIS");
  }
}

module.exports = Quicksand;
