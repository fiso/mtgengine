"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnquestionedAuthority extends UnimplementedCard {
  constructor (game) {
    super(game, "Unquestioned Authority", "Commander 2018", "C18");
  }
}

module.exports = UnquestionedAuthority;
