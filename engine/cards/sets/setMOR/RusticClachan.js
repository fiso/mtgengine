"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RusticClachanBase = require("../setDDF/RusticClachan.js");

class RusticClachan extends RusticClachanBase {
  constructor(game) {
    super(game, "Rustic Clachan", "Morningtide", "MOR");
  }
}

module.exports = RusticClachan;
