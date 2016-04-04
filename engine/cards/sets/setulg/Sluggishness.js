"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sluggishness extends UnimplementedCard {
  constructor(game) {
    super(game, "Sluggishness", "Urza's Legacy", "ULG");
  }
}

module.exports = Sluggishness;
