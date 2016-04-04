"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sustenance extends Card {
  constructor(game) {
    super(game, "Sustenance", "Mercadian Masques", "MMQ");
  }
}

module.exports = Sustenance;
