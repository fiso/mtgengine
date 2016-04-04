"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shunt extends Card {
  constructor(game) {
    super(game, "Shunt", "Darksteel", "DST");
  }
}

module.exports = Shunt;
