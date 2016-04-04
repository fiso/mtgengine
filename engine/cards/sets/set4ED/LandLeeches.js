"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LandLeeches extends Card {
  constructor(game) {
    super(game, "Land Leeches", "Fourth Edition", "4ED");
  }
}

module.exports = LandLeeches;
