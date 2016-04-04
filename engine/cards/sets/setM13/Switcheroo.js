"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Switcheroo extends Card {
  constructor(game) {
    super(game, "Switcheroo", "Magic 2013", "M13");
  }
}

module.exports = Switcheroo;
