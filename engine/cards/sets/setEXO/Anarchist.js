"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Anarchist extends Card {
  constructor(game) {
    super(game, "Anarchist", "Exodus", "EXO");
  }
}

module.exports = Anarchist;
