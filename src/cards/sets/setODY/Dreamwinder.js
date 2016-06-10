"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dreamwinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Dreamwinder", "Odyssey", "ODY");
  }
}

module.exports = Dreamwinder;
