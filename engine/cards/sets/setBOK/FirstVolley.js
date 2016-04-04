"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FirstVolley extends Card {
  constructor(game) {
    super(game, "First Volley", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FirstVolley;
