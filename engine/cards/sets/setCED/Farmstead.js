"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Farmstead extends Card {
  constructor(game) {
    super(game, "Farmstead", "Collector's Edition", "CED");
  }
}

module.exports = Farmstead;
