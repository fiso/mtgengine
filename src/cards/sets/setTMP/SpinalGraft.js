"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinalGraft extends UnimplementedCard {
  constructor (game) {
    super(game, "Spinal Graft", "Tempest", "TMP");
  }
}

module.exports = SpinalGraft;
