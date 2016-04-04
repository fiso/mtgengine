"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Zoologist extends UnimplementedCard {
  constructor(game) {
    super(game, "Zoologist", "Odyssey", "ODY");
  }
}

module.exports = Zoologist;
