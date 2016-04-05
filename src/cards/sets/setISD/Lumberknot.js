"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lumberknot extends UnimplementedCard {
  constructor(game) {
    super(game, "Lumberknot", "Innistrad", "ISD");
  }
}

module.exports = Lumberknot;
