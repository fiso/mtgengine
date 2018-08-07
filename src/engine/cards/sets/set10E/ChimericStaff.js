"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChimericStaff extends UnimplementedCard {
  constructor (game) {
    super(game, "Chimeric Staff", "Tenth Edition", "10E");
  }
}

module.exports = ChimericStaff;
