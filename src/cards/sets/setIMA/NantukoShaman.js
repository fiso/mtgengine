"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Nantuko Shaman", "Iconic Masters", "IMA");
  }
}

module.exports = NantukoShaman;
