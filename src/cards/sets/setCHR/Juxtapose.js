"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Juxtapose extends UnimplementedCard {
  constructor (game) {
    super(game, "Juxtapose", "Chronicles", "CHR");
  }
}

module.exports = Juxtapose;
