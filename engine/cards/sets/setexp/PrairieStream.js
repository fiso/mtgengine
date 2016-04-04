"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrairieStreamBase = require("../setBFZ/PrairieStream.js");

class PrairieStream extends PrairieStreamBase {
  constructor(game) {
    super(game, "Prairie Stream", "Zendikar Expedition", "EXP");
  }
}

module.exports = PrairieStream;
