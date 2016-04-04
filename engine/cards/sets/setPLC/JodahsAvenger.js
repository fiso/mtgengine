"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JodahsAvenger extends Card {
  constructor(game) {
    super(game, "Jodah's Avenger", "Planar Chaos", "PLC");
  }
}

module.exports = JodahsAvenger;
