"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JackalopeHerd extends Card {
  constructor(game) {
    super(game, "Jackalope Herd", "Exodus", "EXO");
  }
}

module.exports = JackalopeHerd;
