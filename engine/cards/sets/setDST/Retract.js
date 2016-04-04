"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Retract extends Card {
  constructor(game) {
    super(game, "Retract", "Darksteel", "DST");
  }
}

module.exports = Retract;
