"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kismet extends UnimplementedCard {
  constructor(game) {
    super(game, "Kismet", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Kismet;
