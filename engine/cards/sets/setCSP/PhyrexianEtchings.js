"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianEtchings extends Card {
  constructor(game) {
    super(game, "Phyrexian Etchings", "Coldsnap", "CSP");
  }
}

module.exports = PhyrexianEtchings;
