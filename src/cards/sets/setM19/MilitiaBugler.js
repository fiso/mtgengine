"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MilitiaBugler extends UnimplementedCard {
  constructor (game) {
    super(game, "Militia Bugler", "Core Set 2019", "M19");
  }
}

module.exports = MilitiaBugler;
