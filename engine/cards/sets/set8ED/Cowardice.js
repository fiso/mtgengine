"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cowardice extends Card {
  constructor(game) {
    super(game, "Cowardice", "Eighth Edition", "8ED");
  }
}

module.exports = Cowardice;
