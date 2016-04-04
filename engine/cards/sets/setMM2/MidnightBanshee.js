"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MidnightBanshee extends Card {
  constructor(game) {
    super(game, "Midnight Banshee", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MidnightBanshee;
