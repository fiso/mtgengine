"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartyrofBones extends UnimplementedCard {
  constructor (game) {
    super(game, "Martyr of Bones", "Coldsnap", "CSP");
  }
}

module.exports = MartyrofBones;
