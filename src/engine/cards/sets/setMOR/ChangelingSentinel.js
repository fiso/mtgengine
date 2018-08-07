"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChangelingSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Changeling Sentinel", "Morningtide", "MOR");
  }
}

module.exports = ChangelingSentinel;
