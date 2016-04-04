"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingSnare extends UnimplementedCard {
  constructor(game) {
    super(game, "Wing Snare", "Eighth Edition", "8ED");
  }
}

module.exports = WingSnare;
