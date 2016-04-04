"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sentinel extends Card {
  constructor(game) {
    super(game, "Sentinel", "Chronicles", "CHR");
  }
}

module.exports = Sentinel;
