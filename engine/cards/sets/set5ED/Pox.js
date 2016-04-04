"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pox extends Card {
  constructor(game) {
    super(game, "Pox", "Fifth Edition", "5ED");
  }
}

module.exports = Pox;
