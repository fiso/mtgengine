"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RushofBlood extends UnimplementedCard {
  constructor(game) {
    super(game, "Rush of Blood", "Avacyn Restored", "AVR");
  }
}

module.exports = RushofBlood;
