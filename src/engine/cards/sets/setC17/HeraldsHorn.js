"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldsHorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Herald's Horn", "Commander 2017", "C17");
  }
}

module.exports = HeraldsHorn;
