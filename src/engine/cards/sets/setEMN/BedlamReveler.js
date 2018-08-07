"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BedlamReveler extends UnimplementedCard {
  constructor (game) {
    super(game, "Bedlam Reveler", "Eldritch Moon", "EMN");
  }
}

module.exports = BedlamReveler;
