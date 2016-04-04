"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnormousBaloth extends Card {
  constructor(game) {
    super(game, "Enormous Baloth", "Eighth Edition", "8ED");
  }
}

module.exports = EnormousBaloth;
