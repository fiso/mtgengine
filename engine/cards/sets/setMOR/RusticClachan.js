"use strict";
const Constants = require ("../../../Constants");
const RusticClachanBase = require("../setDDF/RusticClachan");

class RusticClachan extends RusticClachanBase {
  constructor(game) {
    super(game, "Rustic Clachan", "Morningtide", "MOR");
  }
}

module.exports = RusticClachan;
