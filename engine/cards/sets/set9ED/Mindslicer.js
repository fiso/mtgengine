"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mindslicer extends Card {
  constructor(game) {
    super(game, "Mindslicer", "Ninth Edition", "9ED");
  }
}

module.exports = Mindslicer;
