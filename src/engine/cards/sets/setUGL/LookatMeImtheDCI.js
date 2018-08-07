"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LookatMeImtheDCI extends UnimplementedCard {
  constructor (game) {
    super(game, "Look at Me, I'm the DCI", "Unglued", "UGL");
  }
}

module.exports = LookatMeImtheDCI;
