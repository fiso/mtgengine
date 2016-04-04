"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlackLotusBase = require("../setCED/BlackLotus.js");

class BlackLotus extends BlackLotusBase {
  constructor(game) {
    super(game, "Black Lotus", "Limited Edition Alpha", "LEA");
  }
}

module.exports = BlackLotus;
