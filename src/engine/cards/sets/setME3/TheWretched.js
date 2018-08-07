"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheWretched extends UnimplementedCard {
  constructor (game) {
    super(game, "The Wretched", "Masters Edition III", "ME3");
  }
}

module.exports = TheWretched;
