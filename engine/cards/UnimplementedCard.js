"use strict";
const Card = require("../objects/Card");
const Constants = require ("../Constants");
const assert = require("assert");

class UnimplementedCard extends Card {
  constructor (game, name, set, setCode) {
    super(game, name, set, setCode);
    this._unimplemented = true;
  }
}

module.exports = UnimplementedCard;
