"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NearheathChaplain extends UnimplementedCard {
  constructor(game) {
    super(game, "Nearheath Chaplain", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NearheathChaplain;
