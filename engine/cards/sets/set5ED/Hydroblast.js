"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hydroblast extends Card {
  constructor(game) {
    super(game, "Hydroblast", "Fifth Edition", "5ED");
  }
}

module.exports = Hydroblast;
