"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenHorror extends Card {
  constructor(game) {
    super(game, "Hidden Horror", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HiddenHorror;
