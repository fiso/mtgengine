"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmperorCrocodile extends Card {
  constructor(game) {
    super(game, "Emperor Crocodile", "Eighth Edition", "8ED");
  }
}

module.exports = EmperorCrocodile;
