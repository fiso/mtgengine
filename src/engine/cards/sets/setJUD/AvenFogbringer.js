"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenFogbringer extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Fogbringer", "Judgment", "JUD");
  }
}

module.exports = AvenFogbringer;
