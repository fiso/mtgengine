"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thoughtlace extends Card {
  constructor(game) {
    super(game, "Thoughtlace", "Collector's Edition", "CED");
  }
}

module.exports = Thoughtlace;
