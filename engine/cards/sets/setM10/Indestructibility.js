"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Indestructibility extends Card {
  constructor(game) {
    super(game, "Indestructibility", "Magic 2010", "M10");
  }
}

module.exports = Indestructibility;
