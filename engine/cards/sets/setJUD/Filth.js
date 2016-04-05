"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Filth extends UnimplementedCard {
  constructor(game) {
    super(game, "Filth", "Judgment", "JUD");
  }
}

module.exports = Filth;
