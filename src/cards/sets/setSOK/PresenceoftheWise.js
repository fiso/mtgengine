"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PresenceoftheWise extends UnimplementedCard {
  constructor (game) {
    super(game, "Presence of the Wise", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = PresenceoftheWise;
