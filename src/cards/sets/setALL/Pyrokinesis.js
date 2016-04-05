"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pyrokinesis extends UnimplementedCard {
  constructor(game) {
    super(game, "Pyrokinesis", "Alliances", "ALL");
  }
}

module.exports = Pyrokinesis;
