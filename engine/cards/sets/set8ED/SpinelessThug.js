"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpinelessThug extends Card {
  constructor(game) {
    super(game, "Spineless Thug", "Eighth Edition", "8ED");
  }
}

module.exports = SpinelessThug;
