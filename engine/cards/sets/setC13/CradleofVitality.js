"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CradleofVitality extends Card {
  constructor(game) {
    super(game, "Cradle of Vitality", "Commander 2013 Edition", "C13");
  }
}

module.exports = CradleofVitality;
