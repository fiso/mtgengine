"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Afflict extends Card {
  constructor(game) {
    super(game, "Afflict", "Odyssey", "ODY");
  }
}

module.exports = Afflict;
