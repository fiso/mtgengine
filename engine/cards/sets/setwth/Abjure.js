"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Abjure extends Card {
  constructor(game) {
    super(game, "Abjure", "Weatherlight", "WTH");
  }
}

module.exports = Abjure;
