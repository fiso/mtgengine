"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RagingRiver extends Card {
  constructor(game) {
    super(game, "Raging River", "Collector's Edition", "CED");
  }
}

module.exports = RagingRiver;
