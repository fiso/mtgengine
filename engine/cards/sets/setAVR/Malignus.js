"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Malignus extends Card {
  constructor(game) {
    super(game, "Malignus", "Avacyn Restored", "AVR");
  }
}

module.exports = Malignus;
