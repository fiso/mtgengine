"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EvolvingWildsBase = require("../setBFZ/EvolvingWilds.js");

class EvolvingWilds extends EvolvingWildsBase {
  constructor(game) {
    super(game, "Evolving Wilds", "Magic Origins", "ORI");
  }
}

module.exports = EvolvingWilds;
