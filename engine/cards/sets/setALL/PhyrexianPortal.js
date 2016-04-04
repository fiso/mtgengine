"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianPortal extends Card {
  constructor(game) {
    super(game, "Phyrexian Portal", "Alliances", "ALL");
  }
}

module.exports = PhyrexianPortal;
