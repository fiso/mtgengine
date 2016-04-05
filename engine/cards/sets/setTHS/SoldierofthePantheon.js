"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldierofthePantheon extends UnimplementedCard {
  constructor(game) {
    super(game, "Soldier of the Pantheon", "Theros", "THS");
  }
}

module.exports = SoldierofthePantheon;
