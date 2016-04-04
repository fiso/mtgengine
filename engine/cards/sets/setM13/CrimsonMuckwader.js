"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrimsonMuckwader extends UnimplementedCard {
  constructor(game) {
    super(game, "Crimson Muckwader", "Magic 2013", "M13");
  }
}

module.exports = CrimsonMuckwader;
