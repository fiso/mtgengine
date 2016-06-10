"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Repopulate extends UnimplementedCard {
  constructor (game) {
    super(game, "Repopulate", "Urza's Legacy", "ULG");
  }
}

module.exports = Repopulate;
