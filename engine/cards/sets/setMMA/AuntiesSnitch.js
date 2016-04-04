"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuntiesSnitch extends Card {
  constructor(game) {
    super(game, "Auntie's Snitch", "Modern Masters", "MMA");
  }
}

module.exports = AuntiesSnitch;
