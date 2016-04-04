"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreamstoneHedronBase = require("../setARC/DreamstoneHedron.js");

class DreamstoneHedron extends DreamstoneHedronBase {
  constructor(game) {
    super(game, "Dreamstone Hedron", "Commander 2014", "C14");
  }
}

module.exports = DreamstoneHedron;
