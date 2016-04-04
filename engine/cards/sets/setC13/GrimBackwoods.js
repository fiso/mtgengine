"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimBackwoods extends Card {
  constructor(game) {
    super(game, "Grim Backwoods", "Commander 2013 Edition", "C13");
  }
}

module.exports = GrimBackwoods;
