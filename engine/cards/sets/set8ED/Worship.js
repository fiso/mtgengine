"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Worship extends Card {
  constructor(game) {
    super(game, "Worship", "Eighth Edition", "8ED");
  }
}

module.exports = Worship;
