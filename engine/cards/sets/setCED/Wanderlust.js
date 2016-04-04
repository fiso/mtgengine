"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wanderlust extends Card {
  constructor(game) {
    super(game, "Wanderlust", "Collector's Edition", "CED");
  }
}

module.exports = Wanderlust;
