"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CuttheEarthlyBond extends UnimplementedCard {
  constructor (game) {
    super(game, "Cut the Earthly Bond", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = CuttheEarthlyBond;
