"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoseijuWhoSheltersAll extends UnimplementedCard {
  constructor (game) {
    super(game, "Boseiju, Who Shelters All", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BoseijuWhoSheltersAll;
