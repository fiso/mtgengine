"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrisMage extends Card {
  constructor(game) {
    super(game, "Kris Mage", "Mercadian Masques", "MMQ");
  }
}

module.exports = KrisMage;
