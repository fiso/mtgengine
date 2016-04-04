"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrMoonvessel extends Card {
  constructor(game) {
    super(game, "Myr Moonvessel", "Darksteel", "DST");
  }
}

module.exports = MyrMoonvessel;
