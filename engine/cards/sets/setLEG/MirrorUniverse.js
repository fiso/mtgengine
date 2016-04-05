"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorUniverse extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirror Universe", "Legends", "LEG");
  }
}

module.exports = MirrorUniverse;
