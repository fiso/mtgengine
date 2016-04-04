"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KarnLiberated extends Card {
  constructor(game) {
    super(game, "Karn Liberated", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KarnLiberated;
