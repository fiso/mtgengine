"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IndulgentTormentor extends UnimplementedCard {
  constructor(game) {
    super(game, "Indulgent Tormentor", "Magic 2015 Core Set", "M15");
  }
}

module.exports = IndulgentTormentor;
