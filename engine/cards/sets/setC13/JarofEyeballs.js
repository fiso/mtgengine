"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JarofEyeballs extends UnimplementedCard {
  constructor(game) {
    super(game, "Jar of Eyeballs", "Commander 2013 Edition", "C13");
  }
}

module.exports = JarofEyeballs;
