"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Submerge extends UnimplementedCard {
  constructor (game) {
    super(game, "Submerge", "Nemesis", "NMS");
  }
}

module.exports = Submerge;
