"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Karoo extends Card {
  constructor(game) {
    super(game, "Karoo", "Commander 2014", "C14");
  }
}

module.exports = Karoo;
