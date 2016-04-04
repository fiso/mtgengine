"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dehydration extends Card {
  constructor(game) {
    super(game, "Dehydration", "Eighth Edition", "8ED");
  }
}

module.exports = Dehydration;
