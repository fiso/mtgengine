"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GallowsWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Gallows Warden", "Innistrad", "ISD");
  }
}

module.exports = GallowsWarden;
