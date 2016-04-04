"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CuttheEarthlyBond extends Card {
  constructor(game) {
    super(game, "Cut the Earthly Bond", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = CuttheEarthlyBond;
