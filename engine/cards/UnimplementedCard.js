"use strict";
const Card = require("../objects/Card");
const Constants = require ("../Constants");
const assert = require("assert");

class UnimplementedCard extends Card {
  constructor (game, callback, name, set) {
    super(game, callback, name, set);
  }
}

module.exports = UnimplementedCard;
