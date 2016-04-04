"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeraldofLeshrac extends Card {
  constructor(game) {
    super(game, "Herald of Leshrac", "Coldsnap", "CSP");
  }
}

module.exports = HeraldofLeshrac;
