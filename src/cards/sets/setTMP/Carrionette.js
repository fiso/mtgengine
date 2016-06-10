"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carrionette extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrionette", "Tempest", "TMP");
  }
}

module.exports = Carrionette;
