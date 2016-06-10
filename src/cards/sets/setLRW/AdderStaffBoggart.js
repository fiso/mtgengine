"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdderStaffBoggart extends UnimplementedCard {
  constructor (game) {
    super(game, "Adder-Staff Boggart", "Lorwyn", "LRW");
  }
}

module.exports = AdderStaffBoggart;
