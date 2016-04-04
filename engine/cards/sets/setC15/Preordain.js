"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Preordain extends Card {
  constructor(game) {
    super(game, "Preordain", "Commander 2015", "C15");
  }
}

module.exports = Preordain;
