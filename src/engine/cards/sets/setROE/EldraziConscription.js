"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziConscription extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldrazi Conscription", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EldraziConscription;
