"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShrinkBase = require("../set5ED/Shrink.js");

class Shrink extends ShrinkBase {
  constructor(game) {
    super(game, "Shrink", "Masters Edition II", "ME2");
  }
}

module.exports = Shrink;
