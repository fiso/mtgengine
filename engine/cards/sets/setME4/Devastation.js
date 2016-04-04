"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Devastation extends Card {
  constructor(game) {
    super(game, "Devastation", "Masters Edition IV", "ME4");
  }
}

module.exports = Devastation;
