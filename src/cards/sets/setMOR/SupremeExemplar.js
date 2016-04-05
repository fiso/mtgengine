"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SupremeExemplar extends UnimplementedCard {
  constructor(game) {
    super(game, "Supreme Exemplar", "Morningtide", "MOR");
  }
}

module.exports = SupremeExemplar;
