"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterofArms extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of Arms", "Weatherlight", "WTH");
  }
}

module.exports = MasterofArms;
