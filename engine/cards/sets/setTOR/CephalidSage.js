"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CephalidSage extends Card {
  constructor(game) {
    super(game, "Cephalid Sage", "Torment", "TOR");
  }
}

module.exports = CephalidSage;
