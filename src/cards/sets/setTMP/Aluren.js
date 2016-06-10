"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aluren extends UnimplementedCard {
  constructor (game) {
    super(game, "Aluren", "Tempest", "TMP");
  }
}

module.exports = Aluren;
