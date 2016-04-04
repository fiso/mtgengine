"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sinkhole extends Card {
  constructor(game) {
    super(game, "Sinkhole", "Collector's Edition", "CED");
  }
}

module.exports = Sinkhole;
