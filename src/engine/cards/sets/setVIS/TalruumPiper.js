"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalruumPiper extends UnimplementedCard {
  constructor (game) {
    super(game, "Talruum Piper", "Visions", "VIS");
  }
}

module.exports = TalruumPiper;
