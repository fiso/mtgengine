"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReyaDawnbringerBase = require("../setDD3_DVD/ReyaDawnbringer.js");

class ReyaDawnbringer extends ReyaDawnbringerBase {
  constructor(game) {
    super(game, "Reya Dawnbringer", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ReyaDawnbringer;
