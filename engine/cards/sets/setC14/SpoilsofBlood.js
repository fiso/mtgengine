"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpoilsofBlood extends UnimplementedCard {
  constructor(game) {
    super(game, "Spoils of Blood", "Commander 2014", "C14");
  }
}

module.exports = SpoilsofBlood;
