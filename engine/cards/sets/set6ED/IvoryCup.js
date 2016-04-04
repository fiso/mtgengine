"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IvoryCup extends Card {
  constructor(game) {
    super(game, "Ivory Cup", "Classic Sixth Edition", "6ED");
  }
}

module.exports = IvoryCup;
