"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Archivist extends Card {
  constructor(game) {
    super(game, "Archivist", "Eighth Edition", "8ED");
  }
}

module.exports = Archivist;
