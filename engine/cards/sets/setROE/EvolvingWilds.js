"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EvolvingWildsBase = require("../setBFZ/EvolvingWilds.js");

class EvolvingWilds extends EvolvingWildsBase {
  constructor(game) {
    super(game, "Evolving Wilds", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EvolvingWilds;
