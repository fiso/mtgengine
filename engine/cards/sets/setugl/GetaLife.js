"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GetaLife extends Card {
  constructor(game) {
    super(game, "Get a Life", "Unglued", "UGL");
  }
}

module.exports = GetaLife;
