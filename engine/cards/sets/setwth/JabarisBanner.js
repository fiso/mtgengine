"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JabarisBanner extends UnimplementedCard {
  constructor(game) {
    super(game, "Jabari's Banner", "Weatherlight", "WTH");
  }
}

module.exports = JabarisBanner;
