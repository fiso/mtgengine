"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Clone extends Card {
  constructor(game) {
    super(game, "Clone", "Collector's Edition", "CED");
  }
}

module.exports = Clone;
