"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MimicVat extends UnimplementedCard {
  constructor (game) {
    super(game, "Mimic Vat", "Commander 2018", "C18");
  }
}

module.exports = MimicVat;
