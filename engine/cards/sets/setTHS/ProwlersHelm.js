"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProwlersHelm extends Card {
  constructor(game) {
    super(game, "Prowler's Helm", "Theros", "THS");
  }
}

module.exports = ProwlersHelm;
