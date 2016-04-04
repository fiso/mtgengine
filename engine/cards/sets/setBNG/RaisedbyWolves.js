"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaisedbyWolves extends UnimplementedCard {
  constructor(game) {
    super(game, "Raised by Wolves", "Born of the Gods", "BNG");
  }
}

module.exports = RaisedbyWolves;
