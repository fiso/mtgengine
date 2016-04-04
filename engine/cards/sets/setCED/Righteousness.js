"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Righteousness extends Card {
  constructor(game) {
    super(game, "Righteousness", "Collector's Edition", "CED");
  }
}

module.exports = Righteousness;
