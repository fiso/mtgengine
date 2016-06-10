"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deathmark extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathmark", "Coldsnap", "CSP");
  }
}

module.exports = Deathmark;
