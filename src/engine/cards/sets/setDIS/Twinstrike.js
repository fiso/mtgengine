"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Twinstrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Twinstrike", "Dissension", "DIS");
  }
}

module.exports = Twinstrike;
