"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Phelddagrif extends UnimplementedCard {
  constructor (game) {
    super(game, "Phelddagrif", "Alliances", "ALL");
  }
}

module.exports = Phelddagrif;
