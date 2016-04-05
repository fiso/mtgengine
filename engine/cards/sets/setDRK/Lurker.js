"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lurker extends UnimplementedCard {
  constructor(game) {
    super(game, "Lurker", "The Dark", "DRK");
  }
}

module.exports = Lurker;
