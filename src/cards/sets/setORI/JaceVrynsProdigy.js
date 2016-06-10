"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaceVrynsProdigy extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace, Vryn's Prodigy", "Magic Origins", "ORI");
  }
}

module.exports = JaceVrynsProdigy;
