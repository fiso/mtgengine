"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisownedAncestor extends UnimplementedCard {
  constructor (game) {
    super(game, "Disowned Ancestor", "Khans of Tarkir", "KTK");
  }
}

module.exports = DisownedAncestor;
