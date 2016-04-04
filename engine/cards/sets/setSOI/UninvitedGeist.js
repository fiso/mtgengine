"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UninvitedGeist extends UnimplementedCard {
  constructor(game) {
    super(game, "Uninvited Geist", "Shadows over Innistrad", "SOI");
  }
}

module.exports = UninvitedGeist;
