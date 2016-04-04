"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReforgetheSoul extends Card {
  constructor(game) {
    super(game, "Reforge the Soul", "Avacyn Restored", "AVR");
  }
}

module.exports = ReforgetheSoul;
