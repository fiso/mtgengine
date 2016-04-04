"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianBoon extends Card {
  constructor(game) {
    super(game, "Phyrexian Boon", "Alliances", "ALL");
  }
}

module.exports = PhyrexianBoon;
