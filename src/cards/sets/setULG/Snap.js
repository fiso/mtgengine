"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Snap extends UnimplementedCard {
  constructor (game) {
    super(game, "Snap", "Urza's Legacy", "ULG");
  }
}

module.exports = Snap;
