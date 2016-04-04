"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarchiefGiant extends Card {
  constructor(game) {
    super(game, "Warchief Giant", "Commander 2015", "C15");
  }
}

module.exports = WarchiefGiant;
