"use strict";
const Card = require("../objects/Card");
const assert = require("assert");

class UnimplementedCard extends Card {
  constructor (game, name, set, setCode) {
    super(game, name, set, setCode);
    this._unimplemented = true;
  }
}

module.exports = UnimplementedCard;
