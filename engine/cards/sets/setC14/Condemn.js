"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Condemn extends UnimplementedCard {
  constructor(game) {
    super(game, "Condemn", "Commander 2014", "C14");
  }
}

module.exports = Condemn;
