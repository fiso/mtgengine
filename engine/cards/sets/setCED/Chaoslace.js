"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Chaoslace extends Card {
  constructor(game) {
    super(game, "Chaoslace", "Collector's Edition", "CED");
  }
}

module.exports = Chaoslace;
