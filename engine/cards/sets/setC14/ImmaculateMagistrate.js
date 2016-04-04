"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImmaculateMagistrate extends UnimplementedCard {
  constructor(game) {
    super(game, "Immaculate Magistrate", "Commander 2014", "C14");
  }
}

module.exports = ImmaculateMagistrate;
