"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FortifiedArea extends Card {
  constructor(game) {
    super(game, "Fortified Area", "Fourth Edition", "4ED");
  }
}

module.exports = FortifiedArea;
