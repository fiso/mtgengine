"use strict";
const Constants = require ("../../../Constants");
const PrairieStreamBase = require("../setBFZ/PrairieStream");

class PrairieStream extends PrairieStreamBase {
  constructor (game) {
    super(game, "Prairie Stream", "BFZ Standard Series", "PSS1");
  }
}

module.exports = PrairieStream;
