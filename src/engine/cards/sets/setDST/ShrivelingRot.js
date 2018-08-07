"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShrivelingRot extends UnimplementedCard {
  constructor (game) {
    super(game, "Shriveling Rot", "Darksteel", "DST");
  }
}

module.exports = ShrivelingRot;
