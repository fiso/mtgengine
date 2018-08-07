"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MacabreWaltz extends UnimplementedCard {
  constructor (game) {
    super(game, "Macabre Waltz", "Core Set 2019", "M19");
  }
}

module.exports = MacabreWaltz;
