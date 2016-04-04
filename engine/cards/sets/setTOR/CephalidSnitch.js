"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CephalidSnitch extends Card {
  constructor(game) {
    super(game, "Cephalid Snitch", "Torment", "TOR");
  }
}

module.exports = CephalidSnitch;
