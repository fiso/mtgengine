"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordofShatterskullPass extends UnimplementedCard {
  constructor(game) {
    super(game, "Lord of Shatterskull Pass", "Launch Parties", "pLPA");
  }
}

module.exports = LordofShatterskullPass;
