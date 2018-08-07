"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkBargain extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Bargain", "Dominaria", "DOM");
  }
}

module.exports = DarkBargain;
