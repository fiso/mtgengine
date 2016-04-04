"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dismantle extends Card {
  constructor(game) {
    super(game, "Dismantle", "Darksteel", "DST");
  }
}

module.exports = Dismantle;
