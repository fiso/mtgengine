"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurGlade extends UnimplementedCard {
  constructor(game) {
    super(game, "Centaur Glade", "Onslaught", "ONS");
  }
}

module.exports = CentaurGlade;
