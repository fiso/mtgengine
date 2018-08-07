"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SickandTired extends UnimplementedCard {
  constructor (game) {
    super(game, "Sick and Tired", "Urza's Legacy", "ULG");
  }
}

module.exports = SickandTired;
