"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MisthoofKirin extends UnimplementedCard {
  constructor (game) {
    super(game, "Misthoof Kirin", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MisthoofKirin;
