"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VisaratheDreadful extends UnimplementedCard {
  constructor (game) {
    super(game, "Visara the Dreadful", "From the Vault: Legends", "V11");
  }
}

module.exports = VisaratheDreadful;
