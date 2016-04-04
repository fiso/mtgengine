"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Foster extends Card {
  constructor(game) {
    super(game, "Foster", "Commander 2013 Edition", "C13");
  }
}

module.exports = Foster;
