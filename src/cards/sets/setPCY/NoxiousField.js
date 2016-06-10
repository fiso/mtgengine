"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoxiousField extends UnimplementedCard {
  constructor (game) {
    super(game, "Noxious Field", "Prophecy", "PCY");
  }
}

module.exports = NoxiousField;
