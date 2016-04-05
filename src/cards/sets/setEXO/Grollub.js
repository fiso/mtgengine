"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Grollub extends UnimplementedCard {
  constructor(game) {
    super(game, "Grollub", "Exodus", "EXO");
  }
}

module.exports = Grollub;
