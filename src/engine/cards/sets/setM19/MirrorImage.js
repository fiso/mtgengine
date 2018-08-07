"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorImage extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirror Image", "Core Set 2019", "M19");
  }
}

module.exports = MirrorImage;
