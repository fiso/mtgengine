"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WingSnareBase = require("../set8ED/WingSnare.js");

class WingSnare extends WingSnareBase {
  constructor(game) {
    super(game, "Wing Snare", "Seventh Edition", "7ED");
  }
}

module.exports = WingSnare;
