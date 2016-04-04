"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HondenofLifesWeb extends Card {
  constructor(game) {
    super(game, "Honden of Life's Web", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HondenofLifesWeb;
