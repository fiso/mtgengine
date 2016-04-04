"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvatarofMe extends Card {
  constructor(game) {
    super(game, "Avatar of Me", "Unhinged", "UNH");
  }
}

module.exports = AvatarofMe;
