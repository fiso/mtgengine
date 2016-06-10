"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MacabreWaltz extends UnimplementedCard {
  constructor (game) {
    super(game, "Macabre Waltz", "Dissension", "DIS");
  }
}

module.exports = MacabreWaltz;
