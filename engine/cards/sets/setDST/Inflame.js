"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Inflame extends Card {
  constructor(game) {
    super(game, "Inflame", "Darksteel", "DST");
  }
}

module.exports = Inflame;
