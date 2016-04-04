"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecurityDetail extends Card {
  constructor(game) {
    super(game, "Security Detail", "Mercadian Masques", "MMQ");
  }
}

module.exports = SecurityDetail;
