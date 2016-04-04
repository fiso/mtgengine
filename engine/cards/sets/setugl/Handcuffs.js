"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Handcuffs extends Card {
  constructor(game) {
    super(game, "Handcuffs", "Unglued", "UGL");
  }
}

module.exports = Handcuffs;
