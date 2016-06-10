"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MouthofRonom extends UnimplementedCard {
  constructor (game) {
    super(game, "Mouth of Ronom", "Coldsnap", "CSP");
  }
}

module.exports = MouthofRonom;
