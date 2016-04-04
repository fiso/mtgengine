"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HomewardPath extends Card {
  constructor(game) {
    super(game, "Homeward Path", "Commander 2013 Edition", "C13");
  }
}

module.exports = HomewardPath;
