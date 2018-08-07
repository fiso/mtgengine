"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MummyParamount extends UnimplementedCard {
  constructor (game) {
    super(game, "Mummy Paramount", "Hour of Devastation", "HOU");
  }
}

module.exports = MummyParamount;
