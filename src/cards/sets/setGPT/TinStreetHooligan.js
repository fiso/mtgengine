"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TinStreetHooligan extends UnimplementedCard {
  constructor (game) {
    super(game, "Tin Street Hooligan", "Guildpact", "GPT");
  }
}

module.exports = TinStreetHooligan;
