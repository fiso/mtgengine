"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Doomsday extends Card {
  constructor(game) {
    super(game, "Doomsday", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Doomsday;
