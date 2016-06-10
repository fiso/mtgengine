"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeningApparition extends UnimplementedCard {
  constructor (game) {
    super(game, "Keening Apparition", "Return to Ravnica", "RTR");
  }
}

module.exports = KeeningApparition;
