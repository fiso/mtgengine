"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Karoo extends UnimplementedCard {
  constructor (game) {
    super(game, "Karoo", "Commander 2014", "C14");
  }
}

module.exports = Karoo;
