"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OketrasLastMercy extends UnimplementedCard {
  constructor (game) {
    super(game, "Oketra's Last Mercy", "Hour of Devastation", "HOU");
  }
}

module.exports = OketrasLastMercy;
