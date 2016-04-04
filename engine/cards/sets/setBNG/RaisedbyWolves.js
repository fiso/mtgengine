"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RaisedbyWolves extends Card {
  constructor(game) {
    super(game, "Raised by Wolves", "Born of the Gods", "BNG");
  }
}

module.exports = RaisedbyWolves;
