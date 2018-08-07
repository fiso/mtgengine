"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Decimate extends UnimplementedCard {
  constructor (game) {
    super(game, "Decimate", "Commander 2018", "C18");
  }
}

module.exports = Decimate;
