"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevoutChaplain extends Card {
  constructor(game) {
    super(game, "Devout Chaplain", "Avacyn Restored", "AVR");
  }
}

module.exports = DevoutChaplain;
