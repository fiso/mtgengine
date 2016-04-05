"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CursedScroll extends UnimplementedCard {
  constructor(game) {
    super(game, "Cursed Scroll", "Tempest", "TMP");
  }
}

module.exports = CursedScroll;
