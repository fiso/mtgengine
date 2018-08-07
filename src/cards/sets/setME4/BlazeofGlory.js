"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazeofGlory extends UnimplementedCard {
  constructor (game) {
    super(game, "Blaze of Glory", "Masters Edition IV", "ME4");
  }
}

module.exports = BlazeofGlory;
