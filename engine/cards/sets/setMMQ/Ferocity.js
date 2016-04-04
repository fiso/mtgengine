"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ferocity extends Card {
  constructor(game) {
    super(game, "Ferocity", "Mercadian Masques", "MMQ");
  }
}

module.exports = Ferocity;
