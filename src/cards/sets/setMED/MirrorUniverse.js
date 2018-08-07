"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorUniverse extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirror Universe", "Masters Edition", "MED");
  }
}

module.exports = MirrorUniverse;
