"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gerrard extends Card {
  constructor(game) {
    super(game, "Gerrard", "Vanguard", "VAN");
  }
}

module.exports = Gerrard;
