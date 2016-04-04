"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Blessing extends Card {
  constructor(game) {
    super(game, "Blessing", "Collector's Edition", "CED");
  }
}

module.exports = Blessing;
