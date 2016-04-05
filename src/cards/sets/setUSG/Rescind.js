"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rescind extends UnimplementedCard {
  constructor(game) {
    super(game, "Rescind", "Urza's Saga", "USG");
  }
}

module.exports = Rescind;
