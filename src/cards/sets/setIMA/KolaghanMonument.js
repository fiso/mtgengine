"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KolaghanMonument extends UnimplementedCard {
  constructor (game) {
    super(game, "Kolaghan Monument", "Iconic Masters", "IMA");
  }
}

module.exports = KolaghanMonument;
