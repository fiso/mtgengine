"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlowUnder extends Card {
  constructor(game) {
    super(game, "Plow Under", "Eighth Edition", "8ED");
  }
}

module.exports = PlowUnder;
