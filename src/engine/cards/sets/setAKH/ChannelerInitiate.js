"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChannelerInitiate extends UnimplementedCard {
  constructor (game) {
    super(game, "Channeler Initiate", "Amonkhet", "AKH");
  }
}

module.exports = ChannelerInitiate;
