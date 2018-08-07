"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OasisRitualist extends UnimplementedCard {
  constructor (game) {
    super(game, "Oasis Ritualist", "Hour of Devastation", "HOU");
  }
}

module.exports = OasisRitualist;
