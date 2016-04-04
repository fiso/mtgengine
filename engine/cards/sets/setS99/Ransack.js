"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ransack extends Card {
  constructor(game) {
    super(game, "Ransack", "Starter 1999", "S99");
  }
}

module.exports = Ransack;
