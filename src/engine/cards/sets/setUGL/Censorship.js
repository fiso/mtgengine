"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Censorship extends UnimplementedCard {
  constructor (game) {
    super(game, "Censorship", "Unglued", "UGL");
  }
}

module.exports = Censorship;
