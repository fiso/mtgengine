"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkinShedder extends UnimplementedCard {
  constructor (game) {
    super(game, "Skin Shedder", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SkinShedder;
