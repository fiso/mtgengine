"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NorthernPaladin extends Card {
  constructor(game) {
    super(game, "Northern Paladin", "Collector's Edition", "CED");
  }
}

module.exports = NorthernPaladin;
