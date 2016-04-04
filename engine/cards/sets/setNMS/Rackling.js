"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rackling extends Card {
  constructor(game) {
    super(game, "Rackling", "Nemesis", "NMS");
  }
}

module.exports = Rackling;
