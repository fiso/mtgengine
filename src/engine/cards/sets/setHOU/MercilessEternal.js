"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercilessEternal extends UnimplementedCard {
  constructor (game) {
    super(game, "Merciless Eternal", "Hour of Devastation", "HOU");
  }
}

module.exports = MercilessEternal;
