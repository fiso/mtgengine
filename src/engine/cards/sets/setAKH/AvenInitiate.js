"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenInitiate extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Initiate", "Amonkhet", "AKH");
  }
}

module.exports = AvenInitiate;
