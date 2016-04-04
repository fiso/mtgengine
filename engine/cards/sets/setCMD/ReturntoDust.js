"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReturntoDustBase = require("../setC14/ReturntoDust.js");

class ReturntoDust extends ReturntoDustBase {
  constructor(game) {
    super(game, "Return to Dust", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ReturntoDust;
