"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrimsonKobolds extends UnimplementedCard {
  constructor(game) {
    super(game, "Crimson Kobolds", "Legends", "LEG");
  }
}

module.exports = CrimsonKobolds;
