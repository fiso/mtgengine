"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnquestionedAuthority extends UnimplementedCard {
  constructor(game) {
    super(game, "Unquestioned Authority", "Judgment", "JUD");
  }
}

module.exports = UnquestionedAuthority;
