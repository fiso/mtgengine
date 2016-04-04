"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RappellingScouts extends Card {
  constructor(game) {
    super(game, "Rappelling Scouts", "Mercadian Masques", "MMQ");
  }
}

module.exports = RappellingScouts;
