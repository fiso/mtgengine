"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reconnaissance extends UnimplementedCard {
  constructor(game) {
    super(game, "Reconnaissance", "Exodus", "EXO");
  }
}

module.exports = Reconnaissance;
