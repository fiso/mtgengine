"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeneralJarkeld extends UnimplementedCard {
  constructor(game) {
    super(game, "General Jarkeld", "Ice Age", "ICE");
  }
}

module.exports = GeneralJarkeld;
