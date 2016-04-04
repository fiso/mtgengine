"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreamstoneHedronBase = require("../setARC/DreamstoneHedron.js");

class DreamstoneHedron extends DreamstoneHedronBase {
  constructor(game) {
    super(game, "Dreamstone Hedron", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DreamstoneHedron;
