"use strict";
const Card = require("../objects/Card");
const Constants = require ("../Constants");
const assert = require("assert");

class UnimplementedCard extends Card {
  constructor (game, name, set) {
    super(game, name, set);
  }
}

module.exports = UnimplementedCard;
