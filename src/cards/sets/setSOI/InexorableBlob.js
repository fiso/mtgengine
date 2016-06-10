"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InexorableBlob extends UnimplementedCard {
  constructor (game) {
    super(game, "Inexorable Blob", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InexorableBlob;
