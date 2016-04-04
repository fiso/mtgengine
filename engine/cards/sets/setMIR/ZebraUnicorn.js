"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZebraUnicorn extends Card {
  constructor(game) {
    super(game, "Zebra Unicorn", "Mirage", "MIR");
  }
}

module.exports = ZebraUnicorn;
