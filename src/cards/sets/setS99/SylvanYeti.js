"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanYeti extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Yeti", "Starter 1999", "S99");
  }
}

module.exports = SylvanYeti;
