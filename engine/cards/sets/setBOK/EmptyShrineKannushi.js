"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmptyShrineKannushi extends UnimplementedCard {
  constructor(game) {
    super(game, "Empty-Shrine Kannushi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = EmptyShrineKannushi;
