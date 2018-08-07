"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DingusStaff extends UnimplementedCard {
  constructor (game) {
    super(game, "Dingus Staff", "Weatherlight", "WTH");
  }
}

module.exports = DingusStaff;
