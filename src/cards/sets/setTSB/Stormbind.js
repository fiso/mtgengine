"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stormbind extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormbind", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Stormbind;
