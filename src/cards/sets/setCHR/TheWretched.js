"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheWretched extends UnimplementedCard {
  constructor (game) {
    super(game, "The Wretched", "Chronicles", "CHR");
  }
}

module.exports = TheWretched;
