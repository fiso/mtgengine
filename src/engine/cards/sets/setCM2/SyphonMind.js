"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SyphonMind extends UnimplementedCard {
  constructor (game) {
    super(game, "Syphon Mind", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = SyphonMind;
