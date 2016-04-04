"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildJhovall extends Card {
  constructor(game) {
    super(game, "Wild Jhovall", "Mercadian Masques", "MMQ");
  }
}

module.exports = WildJhovall;
