"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlagueBeetle extends Card {
  constructor(game) {
    super(game, "Plague Beetle", "Eighth Edition", "8ED");
  }
}

module.exports = PlagueBeetle;
