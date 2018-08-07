"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuneDiviner extends UnimplementedCard {
  constructor (game) {
    super(game, "Dune Diviner", "Hour of Devastation", "HOU");
  }
}

module.exports = DuneDiviner;
