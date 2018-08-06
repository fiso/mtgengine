"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SomberwaldStag extends UnimplementedCard {
  constructor (game) {
    super(game, "Somberwald Stag", "Eldritch Moon", "EMN");
  }
}

module.exports = SomberwaldStag;
