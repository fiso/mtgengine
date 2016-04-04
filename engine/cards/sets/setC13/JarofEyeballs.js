"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JarofEyeballs extends Card {
  constructor(game) {
    super(game, "Jar of Eyeballs", "Commander 2013 Edition", "C13");
  }
}

module.exports = JarofEyeballs;
