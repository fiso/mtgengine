"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spiritualize extends Card {
  constructor(game) {
    super(game, "Spiritualize", "Odyssey", "ODY");
  }
}

module.exports = Spiritualize;
