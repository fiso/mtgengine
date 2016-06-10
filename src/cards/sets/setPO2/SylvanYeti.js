"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanYeti extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Yeti", "Portal Second Age", "PO2");
  }
}

module.exports = SylvanYeti;
