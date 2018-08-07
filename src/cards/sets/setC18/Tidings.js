"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tidings extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidings", "Commander 2018", "C18");
  }
}

module.exports = Tidings;
