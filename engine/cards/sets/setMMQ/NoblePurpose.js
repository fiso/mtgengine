"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NoblePurposeBase = require("../set8ED/NoblePurpose.js");

class NoblePurpose extends NoblePurposeBase {
  constructor(game) {
    super(game, "Noble Purpose", "Mercadian Masques", "MMQ");
  }
}

module.exports = NoblePurpose;
