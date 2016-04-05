"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Nantuko Shaman", "Modern Masters", "MMA");
  }
}

module.exports = NantukoShaman;
