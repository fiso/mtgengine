"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cloudshift extends Card {
  constructor(game) {
    super(game, "Cloudshift", "Avacyn Restored", "AVR");
  }
}

module.exports = Cloudshift;
