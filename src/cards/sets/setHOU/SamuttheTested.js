"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamuttheTested extends UnimplementedCard {
  constructor (game) {
    super(game, "Samut, the Tested", "Hour of Devastation", "HOU");
  }
}

module.exports = SamuttheTested;
