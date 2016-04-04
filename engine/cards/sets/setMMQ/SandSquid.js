"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SandSquid extends Card {
  constructor(game) {
    super(game, "Sand Squid", "Mercadian Masques", "MMQ");
  }
}

module.exports = SandSquid;
