"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DusttoDust extends Card {
  constructor(game) {
    super(game, "Dust to Dust", "Fifth Edition", "5ED");
  }
}

module.exports = DusttoDust;
