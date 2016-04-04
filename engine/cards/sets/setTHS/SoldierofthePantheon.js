"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoldierofthePantheon extends Card {
  constructor(game) {
    super(game, "Soldier of the Pantheon", "Theros", "THS");
  }
}

module.exports = SoldierofthePantheon;
