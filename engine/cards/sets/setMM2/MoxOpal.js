"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoxOpal extends Card {
  constructor(game) {
    super(game, "Mox Opal", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MoxOpal;
