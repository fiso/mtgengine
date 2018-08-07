"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrarksOtherThumb extends UnimplementedCard {
  constructor (game) {
    super(game, "Krark's Other Thumb", "Unstable", "UST");
  }
}

module.exports = KrarksOtherThumb;
