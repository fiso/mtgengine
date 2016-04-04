"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Martyrdom extends UnimplementedCard {
  constructor(game) {
    super(game, "Martyrdom", "Alliances", "ALL");
  }
}

module.exports = Martyrdom;
