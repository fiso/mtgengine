"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevastationTide extends UnimplementedCard {
  constructor(game) {
    super(game, "Devastation Tide", "Avacyn Restored", "AVR");
  }
}

module.exports = DevastationTide;
