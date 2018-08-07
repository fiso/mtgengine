"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dub extends UnimplementedCard {
  constructor (game) {
    super(game, "Dub", "Dominaria", "DOM");
  }
}

module.exports = Dub;
