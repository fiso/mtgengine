"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThievesFortune extends Card {
  constructor(game) {
    super(game, "Thieves' Fortune", "Morningtide", "MOR");
  }
}

module.exports = ThievesFortune;
