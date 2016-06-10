"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cocoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Cocoon", "Chronicles", "CHR");
  }
}

module.exports = Cocoon;
