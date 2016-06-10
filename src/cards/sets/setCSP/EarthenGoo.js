"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarthenGoo extends UnimplementedCard {
  constructor (game) {
    super(game, "Earthen Goo", "Coldsnap", "CSP");
  }
}

module.exports = EarthenGoo;
