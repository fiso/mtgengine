"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CursedScroll extends Card {
  constructor(game) {
    super(game, "Cursed Scroll", "Tempest", "TMP");
  }
}

module.exports = CursedScroll;
