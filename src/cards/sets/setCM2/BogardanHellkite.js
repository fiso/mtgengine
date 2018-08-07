"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogardanHellkite extends UnimplementedCard {
  constructor (game) {
    super(game, "Bogardan Hellkite", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BogardanHellkite;
