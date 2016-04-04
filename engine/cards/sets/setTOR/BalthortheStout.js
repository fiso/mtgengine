"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalthortheStout extends UnimplementedCard {
  constructor(game) {
    super(game, "Balthor the Stout", "Torment", "TOR");
  }
}

module.exports = BalthortheStout;
