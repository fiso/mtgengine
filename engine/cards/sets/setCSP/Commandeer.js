"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Commandeer extends UnimplementedCard {
  constructor(game) {
    super(game, "Commandeer", "Coldsnap", "CSP");
  }
}

module.exports = Commandeer;
