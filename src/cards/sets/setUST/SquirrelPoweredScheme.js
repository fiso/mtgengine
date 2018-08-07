"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquirrelPoweredScheme extends UnimplementedCard {
  constructor (game) {
    super(game, "Squirrel-Powered Scheme", "Unstable", "UST");
  }
}

module.exports = SquirrelPoweredScheme;
