"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Devastation extends UnimplementedCard {
  constructor (game) {
    super(game, "Devastation", "Masters Edition IV", "ME4");
  }
}

module.exports = Devastation;
