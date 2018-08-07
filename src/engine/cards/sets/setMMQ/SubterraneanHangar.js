"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SubterraneanHangar extends UnimplementedCard {
  constructor (game) {
    super(game, "Subterranean Hangar", "Mercadian Masques", "MMQ");
  }
}

module.exports = SubterraneanHangar;
