"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoseijuWhoSheltersAll extends UnimplementedCard {
  constructor (game) {
    super(game, "Boseiju, Who Shelters All", "From the Vault: Realms", "V12");
  }
}

module.exports = BoseijuWhoSheltersAll;
