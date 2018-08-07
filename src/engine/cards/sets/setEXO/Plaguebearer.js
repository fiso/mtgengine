"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plaguebearer extends UnimplementedCard {
  constructor (game) {
    super(game, "Plaguebearer", "Exodus", "EXO");
  }
}

module.exports = Plaguebearer;
