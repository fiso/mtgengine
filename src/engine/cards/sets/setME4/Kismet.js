"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kismet extends UnimplementedCard {
  constructor (game) {
    super(game, "Kismet", "Masters Edition IV", "ME4");
  }
}

module.exports = Kismet;
