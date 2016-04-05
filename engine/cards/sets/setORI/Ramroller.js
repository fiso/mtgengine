"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ramroller extends UnimplementedCard {
  constructor(game) {
    super(game, "Ramroller", "Magic Origins", "ORI");
  }
}

module.exports = Ramroller;
