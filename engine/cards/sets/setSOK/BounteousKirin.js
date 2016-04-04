"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BounteousKirin extends UnimplementedCard {
  constructor(game) {
    super(game, "Bounteous Kirin", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = BounteousKirin;
