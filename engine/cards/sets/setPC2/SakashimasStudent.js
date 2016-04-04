"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SakashimasStudent extends Card {
  constructor(game) {
    super(game, "Sakashima's Student", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = SakashimasStudent;
