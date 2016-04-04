"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kaysa extends UnimplementedCard {
  constructor(game) {
    super(game, "Kaysa", "Alliances", "ALL");
  }
}

module.exports = Kaysa;
