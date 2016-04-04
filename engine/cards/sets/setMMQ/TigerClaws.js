"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TigerClaws extends Card {
  constructor(game) {
    super(game, "Tiger Claws", "Mercadian Masques", "MMQ");
  }
}

module.exports = TigerClaws;
