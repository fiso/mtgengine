"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeEbb extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Ebb", "Tempest Remastered", "TPR");
  }
}

module.exports = TimeEbb;
