"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartialCoup extends UnimplementedCard {
  constructor(game) {
    super(game, "Martial Coup", "Commander 2014", "C14");
  }
}

module.exports = MartialCoup;
