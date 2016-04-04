"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DingusStaff extends Card {
  constructor(game) {
    super(game, "Dingus Staff", "Weatherlight", "WTH");
  }
}

module.exports = DingusStaff;
