"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pyroblast extends Card {
  constructor(game) {
    super(game, "Pyroblast", "Fifth Edition", "5ED");
  }
}

module.exports = Pyroblast;
