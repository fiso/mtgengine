"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartialCoup extends UnimplementedCard {
  constructor (game) {
    super(game, "Martial Coup", "Commander 2018", "C18");
  }
}

module.exports = MartialCoup;
