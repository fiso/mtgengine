"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KinjallisCaller extends UnimplementedCard {
  constructor (game) {
    super(game, "Kinjalli's Caller", "Ixalan", "XLN");
  }
}

module.exports = KinjallisCaller;
