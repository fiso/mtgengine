"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Berserk extends Card {
  constructor(game) {
    super(game, "Berserk", "Collector's Edition", "CED");
  }
}

module.exports = Berserk;
