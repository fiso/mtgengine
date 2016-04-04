"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CracklingClub extends UnimplementedCard {
  constructor(game) {
    super(game, "Crackling Club", "Torment", "TOR");
  }
}

module.exports = CracklingClub;
