"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaeasLiege extends Card {
  constructor(game) {
    super(game, "Gaea's Liege", "Collector's Edition", "CED");
  }
}

module.exports = GaeasLiege;
