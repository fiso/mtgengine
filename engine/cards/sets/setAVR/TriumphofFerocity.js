"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TriumphofFerocity extends Card {
  constructor(game) {
    super(game, "Triumph of Ferocity", "Avacyn Restored", "AVR");
  }
}

module.exports = TriumphofFerocity;
