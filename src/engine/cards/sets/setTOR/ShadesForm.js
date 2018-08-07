"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadesForm extends UnimplementedCard {
  constructor (game) {
    super(game, "Shade's Form", "Torment", "TOR");
  }
}

module.exports = ShadesForm;
