"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeEbb extends UnimplementedCard {
  constructor(game) {
    super(game, "Time Ebb", "Magic 2014 Core Set", "M14");
  }
}

module.exports = TimeEbb;
