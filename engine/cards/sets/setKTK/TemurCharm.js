"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemurCharm extends Card {
  constructor(game) {
    super(game, "Temur Charm", "Khans of Tarkir", "KTK");
  }
}

module.exports = TemurCharm;
