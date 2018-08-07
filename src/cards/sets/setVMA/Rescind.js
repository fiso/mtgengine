"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rescind extends UnimplementedCard {
  constructor (game) {
    super(game, "Rescind", "Vintage Masters", "VMA");
  }
}

module.exports = Rescind;
