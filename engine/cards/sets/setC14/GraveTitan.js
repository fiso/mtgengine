"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraveTitan extends Card {
  constructor(game) {
    super(game, "Grave Titan", "Commander 2014", "C14");
  }
}

module.exports = GraveTitan;
