"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PardicArsonist extends UnimplementedCard {
  constructor(game) {
    super(game, "Pardic Arsonist", "Torment", "TOR");
  }
}

module.exports = PardicArsonist;
