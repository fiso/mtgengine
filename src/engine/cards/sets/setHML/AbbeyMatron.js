"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbbeyMatron extends UnimplementedCard {
  constructor (game) {
    super(game, "Abbey Matron", "Homelands", "HML");
  }
}

module.exports = AbbeyMatron;
