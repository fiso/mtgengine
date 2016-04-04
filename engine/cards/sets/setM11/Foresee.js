"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForeseeBase = require("../setFUT/Foresee.js");

class Foresee extends ForeseeBase {
  constructor(game) {
    super(game, "Foresee", "Magic 2011", "M11");
  }
}

module.exports = Foresee;
