"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rebuild extends UnimplementedCard {
  constructor(game) {
    super(game, "Rebuild", "Urza's Legacy", "ULG");
  }
}

module.exports = Rebuild;
