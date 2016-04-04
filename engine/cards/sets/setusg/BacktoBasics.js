"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BacktoBasics extends UnimplementedCard {
  constructor(game) {
    super(game, "Back to Basics", "Urza's Saga", "USG");
  }
}

module.exports = BacktoBasics;
