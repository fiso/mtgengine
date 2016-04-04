"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychoticFury extends Card {
  constructor(game) {
    super(game, "Psychotic Fury", "Dissension", "DIS");
  }
}

module.exports = PsychoticFury;
