"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mycologist extends Card {
  constructor(game) {
    super(game, "Mycologist", "Planar Chaos", "PLC");
  }
}

module.exports = Mycologist;
